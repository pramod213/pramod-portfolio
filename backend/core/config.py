import json
from functools import lru_cache
from typing import Annotated, List
from urllib.parse import urlparse

from pydantic import field_validator
from pydantic_settings import BaseSettings, NoDecode


class Settings(BaseSettings):
    app_name: str = "Portfolio API"
    debug: bool = True
    api_v1_prefix: str = "/api/v1"
    cors_origins: Annotated[List[str], NoDecode] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]
    frontend_url: str = "http://localhost:5173"

    model_config = {
        "env_file": ".env",
        "case_sensitive": False,
    }

    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, v):
        if isinstance(v, str):
            try:
                parsed = json.loads(v)
                if isinstance(parsed, list):
                    return cls._validate_origins(parsed)
            except json.JSONDecodeError:
                pass
            origins = [origin.strip() for origin in v.split(",") if origin.strip()]
            return cls._validate_origins(origins)
        return cls._validate_origins(v) if isinstance(v, list) else v

    @staticmethod
    def _validate_origins(origins: List[str]) -> List[str]:
        validated = []
        for origin in origins:
            if not isinstance(origin, str):
                raise ValueError(f"CORS origin must be a string, got {type(origin).__name__}")
            parsed = urlparse(origin)
            if parsed.scheme not in ("http", "https") or not parsed.netloc:
                raise ValueError(f"Invalid CORS origin: '{origin}'. Must be a valid HTTP/HTTPS origin.")
            if parsed.path and parsed.path != "/":
                raise ValueError(f"Invalid CORS origin: '{origin}'. Origin must not contain a path.")
            validated.append(origin)
        return validated


@lru_cache
def get_settings() -> Settings:
    return Settings()