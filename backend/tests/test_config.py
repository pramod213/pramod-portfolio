import os
import pytest
from core.config import Settings
from pydantic import ValidationError


def test_cors_origins_json_array():
    os.environ["CORS_ORIGINS"] = '["http://localhost", "http://localhost:80"]'
    settings = Settings()
    assert settings.cors_origins == ["http://localhost", "http://localhost:80"]


def test_cors_origins_single_render_url():
    os.environ["CORS_ORIGINS"] = "https://portfolio-frontend-example.onrender.com"
    settings = Settings()
    assert settings.cors_origins == [
        "https://portfolio-frontend-example.onrender.com"
    ]


def test_cors_origins_comma_separated():
    os.environ["CORS_ORIGINS"] = "https://a.example.com, https://b.example.com"
    settings = Settings()
    assert settings.cors_origins == ["https://a.example.com", "https://b.example.com"]


def test_cors_origins_comma_separated_no_spaces():
    os.environ["CORS_ORIGINS"] = "https://a.example.com,https://b.example.com"
    settings = Settings()
    assert settings.cors_origins == ["https://a.example.com", "https://b.example.com"]


def test_cors_origins_empty_entries_ignored():
    os.environ["CORS_ORIGINS"] = "https://a.example.com,,https://b.example.com,"
    settings = Settings()
    assert settings.cors_origins == ["https://a.example.com", "https://b.example.com"]


def test_cors_origins_whitespace_trimmed():
    os.environ["CORS_ORIGINS"] = "  https://a.example.com  ,  https://b.example.com  "
    settings = Settings()
    assert settings.cors_origins == ["https://a.example.com", "https://b.example.com"]


def test_cors_origins_invalid_json_rejected():
    os.environ["CORS_ORIGINS"] = "not-json-at-all"
    with pytest.raises(ValidationError) as exc_info:
        Settings()
    assert "Invalid CORS origin" in str(exc_info.value)


def test_cors_origins_invalid_origin_rejected():
    os.environ["CORS_ORIGINS"] = "not-a-url"
    with pytest.raises(ValidationError) as exc_info:
        Settings()
    assert "Invalid CORS origin" in str(exc_info.value)


def test_cors_origins_mixed_valid_invalid_rejected():
    os.environ["CORS_ORIGINS"] = "https://valid.com,not-a-url"
    with pytest.raises(ValidationError) as exc_info:
        Settings()
    assert "Invalid CORS origin" in str(exc_info.value)


def test_cors_origins_path_not_allowed():
    os.environ["CORS_ORIGINS"] = "https://example.com/some/path"
    with pytest.raises(ValidationError) as exc_info:
        Settings()
    assert "Invalid CORS origin" in str(exc_info.value)


def test_cors_origins_defaults():
    if "CORS_ORIGINS" in os.environ:
        del os.environ["CORS_ORIGINS"]
    settings = Settings()
    assert settings.cors_origins == [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]