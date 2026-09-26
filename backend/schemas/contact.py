from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    message: str = Field(..., min_length=10, max_length=5000, description="Message content")


class ContactResponse(BaseModel):
    success: bool = True
    message: str = "Your message has been received."