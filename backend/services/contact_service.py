import logging
from schemas.contact import ContactRequest, ContactResponse

logger = logging.getLogger(__name__)


async def process_contact_form(request: ContactRequest) -> ContactResponse:
    logger.info(
        "Contact form submitted: name=%s email=%s message_length=%d",
        request.name,
        request.email,
        len(request.message),
    )

    return ContactResponse(
        success=True,
        message="Your message has been received. I'll get back to you soon!",
    )