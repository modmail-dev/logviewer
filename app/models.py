from __future__ import annotations

from datetime import datetime

from beanie import Document
from pydantic import BaseModel, field_validator, Field, AnyHttpUrl


class User(BaseModel):
    id: int
    name: str
    discriminator: int
    avatar_url: AnyHttpUrl
    mod: bool


class Attachment(BaseModel):
    id: int
    filename: str
    url: AnyHttpUrl
    is_image: bool
    size: int


class Message(BaseModel):
    message_id: int
    timestamp: datetime
    author: User
    content: str
    attachments: list[Attachment] = []
    type: str = "thread_message"
    edited: bool = False

    @field_validator("attachments", mode="before")
    def validate_attachments(cls, v: dict) -> list[dict]:
        attachments = []
        for value in v:
            if isinstance(value, str):
                attachments += [dict(
                    id=0,
                    filename="attachment",
                    url=value,
                    is_image=True,
                    size=0
                )]
            else:
                attachments += [value]

        return attachments

    @field_validator("timestamp", mode="before")
    def validate_timestamp(cls, v: str) -> datetime:
        return datetime.fromisoformat(v)


class Log(Document):
    id: str = Field(alias="_id")
    key: str
    open: bool
    created_at: datetime
    closed_at: datetime | None
    channel_id: int
    guild_id: int
    bot_id: int
    recipient: User
    creator: User
    closer: User | None
    messages: list[Message]
    close_message: str = ""
    nsfw: bool = False
    title: str = ""

    class Settings:
        name = "logs"

    @field_validator("created_at", "closed_at", mode="before")
    def validate_timestamp(cls, v: str | None) -> datetime | None:
        if v is None:
            return None
        return datetime.fromisoformat(v)

    @field_validator("close_message", "title", mode="before")
    def validate_nullable_str(cls, v: str | None) -> str:
        return v or ""
