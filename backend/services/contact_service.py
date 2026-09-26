import logging
from typing import Dict
from schemas.contact import ContactRequest, ContactResponse

logger = logging.getLogger(__name__)


async def process_contact_form(request: ContactRequest) -> ContactResponse:
    logger.info(
        "Contact form submitted",
        extra={
            "name": request.name,
            "email": request.email,
            "message_length": len(request.message),
        },
    )

    return ContactResponse(
        success=True,
        message="Your message has been received. I'll get back to you soon!",
    )