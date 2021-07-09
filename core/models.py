from datetime import datetime
import dateutil.parser

from sanic import response
from natural.date import duration

from .formatter import format_content_html


class LogEntry:
    def __init__(self, app, data):
        self.app = app
        self.key = data["key"]
        self.open = data["open"]
        self.created_at = dateutil.parser.parse(data["created_at"])
        self.human_created_at = duration(self.created_at, now=datetime.utcnow())
        self.closed_at = (
            dateutil.parser.parse(data["closed_at"]) if not self.open else None
        )
        self.channel_id = int(data["channel_id"])
        self.guild_id = int(data["guild_id"])
        self.creator = User(data["creator"])
        self.recipient = User(data["recipient"])
        self.closer = User(data["closer"]) if not self.open else None
        self.close_message = format_content_html(data.get("close_message") or "")
        self.messages = [Message(m) for m in data["messages"]]
        self.internal_messages = [m for m in self.messages if m.type == "internal"]
        self.thread_messages = [
            m for m in self.messages if m.type not in ("internal", "system")
        ]

    @property
    def system_avatar_url(self):
        return "https://discordapp.com/assets/" "f78426a064bc9dd24847519259bc42af.png"

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

            if message.is_different_from(next_message):
                groups.append(curr)
                curr = MessageGroup(next_message.author)

        groups.append(curr)
        return groups

    def render_html(self):
        return self.app.ctx.render_template("logbase", log_entry=self)

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
                    current_author = author

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
        self.created_at = dateutil.parser.parse(data["timestamp"])
        self.human_created_at = duration(self.created_at, now=datetime.utcnow())
        self.raw_content = data["content"]
        self.content = self.format_html_content(self.raw_content)
        self.attachments = [Attachment(a) for a in data["attachments"]]
        self.author = User(data["author"])
        self.type = data.get("type", "thread_message")
        self.edited = data.get("edited", False)

    def is_different_from(self, other):
        return (
            (other.created_at - self.created_at).total_seconds() > 60
            or other.author != self.author
            or other.type != self.type
        )

    @staticmethod
    def format_html_content(content):
        return format_content_html(content)
