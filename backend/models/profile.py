from pydantic import BaseModel, Field
from typing import Optional
from datetime import date


class Skill(BaseModel):
    name: str
    category: str
    level: int = Field(ge=1, le=5, default=3)


class Project(BaseModel):
    id: str
    title: str
    description: str
    technologies: list[str]
    link: Optional[str] = None
    github: Optional[str] = None
    featured: bool = False


class Experience(BaseModel):
    id: str
    role: str
    company: str
    period: str
    description: str
    technologies: list[str] = []


class Education(BaseModel):
    id: str
    degree: str
    institution: str
    period: str
    description: Optional[str] = None


class Profile(BaseModel):
    name: str
    title: str
    bio: str
    email: str
    github: Optional[str] = None
    linkedin: Optional[str] = None
    twitter: Optional[str] = None
    skills: list[Skill] = []
    projects: list[Project] = []
    experience: list[Experience] = []
    education: list[Education] = []