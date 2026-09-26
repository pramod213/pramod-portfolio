import json
from pathlib import Path
from fastapi import APIRouter, HTTPException, status
from models.profile import Profile, Skill, Project, Experience, Education

router = APIRouter(prefix="/portfolio", tags=["portfolio"])

DATA_FILE = Path(__file__).parent.parent / "data" / "profile.json"


def load_profile_data() -> dict:
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Profile data not found",
        )
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Invalid profile data format",
        )


@router.get(
    "/",
    response_model=Profile,
    summary="Get portfolio profile",
    description="Retrieve the complete portfolio profile including skills, projects, experience, achievements, and education.",
)
async def get_profile() -> Profile:
    data = load_profile_data()

    skills = [Skill(**s) for s in data.get("skills", [])]
    projects = [Project(**p) for p in data.get("projects", [])]
    experience = [Experience(**e) for e in data.get("experience", [])]
    education = [Education(**e) for e in data.get("education", [])]
    achievements = data.get("achievements", [])

    return Profile(
        name=data.get("name", ""),
        title=data.get("title", ""),
        bio=data.get("bio", ""),
        email=data.get("email", ""),
        github=data.get("github"),
        linkedin=data.get("linkedin"),
        twitter=data.get("twitter"),
        resume=data.get("resume"),
        skills=skills,
        projects=projects,
        experience=experience,
        education=education,
        achievements=achievements,
    )