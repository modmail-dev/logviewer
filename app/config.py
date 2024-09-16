from __future__ import annotations

from pydantic import MongoDsn
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', case_sensitive=False, extra="ignore")
    connection_uri: MongoDsn


settings = Settings()
