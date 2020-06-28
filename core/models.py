from datetime import datetime

from natural.date import duration

from sanic import response

from . import format_markdown


class LogEntry:
    def __init__(self, app, data):
        self.app = app
        self.key = data["key"]
        self.open = data["open"]
        self.created_at = datetime.fromisoformat(data["created_at"])
        self.human_created_at = duration(self.created_at, now=datetime.utcnow())
        self.channel_id = int(data["channel_id"])
        self.guild_id = int(data["guild_id"])
        self.creator = User(data["creator"])
        self.recipient = User(data["recipient"])
        if not self.open:
            if not data.get("close"):
                # backwards compat
                if not data.get("closer"):
                    # something's wrong
                    self.closer = self.closed_at = None
                    self.raw_close_message = ""
                else:
                    self.closed_at = datetime.fromisoformat(data["closed_at"])
                    self.closer = User(data["closer"])
                    self.raw_close_message = data.get("close_message") or ""
                self.close_context = None
            else:
                self.closer = User(data["close"]["closer"])
                self.closed_at = datetime.fromisoformat(data["close"]["timestamp"])
                self.raw_close_message = data["close"].get("content") or ""
                self.close_context = data["close"]["context"]
        else:
            self.closer = self.closed_at = self.close_context = None
            self.raw_close_message = ""

        self.close_message = format_markdown(self.close_context, self.raw_close_message)

        self.messages = [Message(m) for m in data["messages"]]
        self.internal_messages = [m for m in self.messages if m.type == "internal"]
        self.thread_messages = [
            m for m in self.messages if m.type not in {"internal", "system"}
        ]

    @property
    def system_avatar_url(self):
        return "https://discordapp.com/assets/f78426a064bc9dd24847519259bc42af.png"

    @property
    def human_closed_at(self):
        return duration(self.closed_at, now=datetime.utcnow())

    @property
    def message_groups(self):
        groups = []

        if not self.messages:
            return groups

        curr = MessageGroup(self.messages[0].author)

        for index, message in enumerate(self.messages):
            next_index = index + 1 if index + 1 < len(self.messages) else index
            next_message = self.messages[next_index]

            curr.messages.append(message)

            if not message.can_be_grouped(next_message):
                groups.append(curr)
                curr = MessageGroup(next_message.author)

        groups.append(curr)
        return groups

    def render_html(self):
        return self.app.render_template("logbase", log_entry=self)

    def render_plain_text(self):
        messages = self.messages
        thread_create_time = self.created_at.strftime("%d %b %Y - %H:%M UTC")
        out = f"Thread created at {thread_create_time}\n"

        if self.creator == self.recipient:
            out += f"[R] {self.creator} "
            out += f"({self.creator.id}) created a Modmail thread. \n"
        else:
            out += f"[M] {self.creator} "
            out += f"created a thread with [R] "
            out += f"{self.recipient} ({self.recipient.id})\n"

        out += "────────────────────────────────────────────────\n"

        if messages:
            for index, message in enumerate(messages):
                next_index = index + 1 if index + 1 < len(messages) else index
                curr, next_ = message.author, messages[next_index].author

                author = curr
                user_type = "M" if author.mod else "R"
                create_time = message.created_at.strftime("%d/%m %H:%M")

                base = f"{create_time} {user_type} "
                base += f"{author}: {message.raw_content}\n"

                for attachment in message.attachments:
                    base += f"Attachment: {attachment}\n"

                out += base

                if curr != next_:
                    out += "────────────────────────────────\n"

        if not self.open:
            if messages:  # only add if at least 1 message was sent
                out += "────────────────────────────────────────────────\n"

            out += f"[M] {self.closer} ({self.closer.id}) "
            out += "closed the Modmail thread. \n"

            closed_time = self.closed_at.strftime("%d %b %Y - %H:%M UTC")
            out += f"Thread closed at {closed_time} \n"

        return response.text(out)


class User:
    def __init__(self, data):
        self.id = int(data.get("id"))
        self.name = data["name"]
        self.discriminator = data["discriminator"]
        self.avatar_url = data["avatar_url"]
        self.mod = data["mod"]

    @property
    def default_avatar_url(self):
        return "https://cdn.discordapp.com/embed/avatars/{}.png".format(
            int(self.discriminator) % 5
        )

    def __str__(self):
        return f"{self.name}#{self.discriminator}"

    def __eq__(self, other):
        return self.id == other.id and self.mod is other.mod


class MessageGroup:
    def __init__(self, author):
        self.author = author
        self.messages = []

    @property
    def created_at(self):
        return self.messages[0].human_created_at

    @property
    def type(self):
        return self.messages[0].type


class Attachment:
    def __init__(self, data):
        if isinstance(data, str):  # Backwards compatibility
            self.id = 0
            self.filename = "attachment"
            self.url = data
            self.is_image = True
            self.size = 0
        else:
            self.id = int(data["id"])
            self.filename = data["filename"]
            self.url = data["url"]
            self.is_image = data["is_image"]
            self.size = data["size"]


class Message:
    def __init__(self, data):
        self.id = int(data["message_id"])
        self.created_at = datetime.fromisoformat(data["timestamp"])
        self.human_created_at = duration(self.created_at, now=datetime.utcnow())
        self.raw_content = data["content"]
        self.context = data.get("context", None)
        self.content = format_markdown(self.context, self.raw_content)
        self.attachments = [Attachment(a) for a in data["attachments"]]
        self.author = User(data["author"])
        self.type = data.get("type", "thread_message")
        self.edited = data.get("edited", False)
        # TODO: implement
        self.deleted = data.get("deleted", False)

    def can_be_grouped(self, other):
        # 7 minutes
        if (other.created_at - self.created_at).total_seconds() > 420:
            return False

        # Different author or different message type
        if other.author != self.author or other.type != self.type:
            return False

        return True
