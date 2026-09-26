from fastapi import APIRouter, HTTPException, status
from schemas.contact import ContactRequest, ContactResponse
from services import process_contact_form

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post(
    "/",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact form",
    description="Submit a contact form message. Validates name, email, and message.",
)
async def submit_contact(request: ContactRequest) -> ContactResponse:
    try:
        return await process_contact_form(request)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to process contact form. Please try again later.",
        ) from e