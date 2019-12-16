from discord.enums import DefaultAvatar
from discord.utils import snowflake_time


class User:
    def __init__(self, data):
        self.name = data["username"]
        self.id = int(data["id"])
        self.discriminator = data["discriminator"]
        self.avatar = data["avatar"]
        self.mfa_enabled = data.get("mfa_enabled", False)
        self.premium_type = data.get("premium_type")
        self.bot = False

    def __str__(self):
        return "{0.name}#{0.discriminator}".format(self)

    @property
    def avatar_url(self):
        return self.avatar_url_as(format=None, size=1024)

    def is_avatar_animated(self):
        return bool(self.avatar and self.avatar.startswith("a_"))

    def avatar_url_as(self, *, format=None, static_format="webp", size=1024):
        if self.avatar is None:
            return self.default_avatar_url

        if format is None:
            if self.is_avatar_animated():
                format = "gif"
            else:
                format = static_format

        # Discord has trouble animating gifs if the url does not end in `.gif`
        gif_fix = "&_=.gif" if format == "gif" else ""

        return "https://cdn.discordapp.com/avatars/{0.id}/{0.avatar}.{1}?size={2}{3}".format(
            self, format, size, gif_fix
        )

    @property
    def default_avatar(self):
        """Returns the default avatar for a given user. This is calculated by the user's discriminator"""
        return DefaultAvatar(int(self.discriminator) % len(DefaultAvatar))

    @property
    def default_avatar_url(self):
        """Returns a URL for a user's default avatar."""
        return "https://cdn.discordapp.com/embed/avatars/{}.png".format(
            self.default_avatar.value
        )

    @property
    def mention(self):
        """Returns a string that allows you to mention the given user."""
        return "<@{0.id}>".format(self)

    @property
    def created_at(self):
        """Returns the user's creation time in UTC.
        This is when the user's discord account was created."""
        return snowflake_time(self.id)

