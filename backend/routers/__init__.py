from .profile import router as profile_router
from .contact import router as contact_router
from .health import router as health_router

__all__ = ["profile_router", "contact_router", "health_router"]