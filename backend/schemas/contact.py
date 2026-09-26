from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    message: str = Field(..., min_length=10, max_length=5000, description="Message content")

    @field_validator("name")
    @classmethod
    def name_not_empty_or_whitespace(cls, v: str) -> str:
        stripped = v.strip()
        if not stripped:
            raise ValueError("Name cannot be empty or whitespace only")
        return stripped

    @field_validator("message")
    @classmethod
    def message_not_whitespace_only(cls, v: str) -> str:
        stripped = v.strip()
        if not stripped:
            raise ValueError("Message cannot be empty or whitespace only")
        return stripped


class ContactResponse(BaseModel):
    success: bool = True
    message: str = "Your message has been received."