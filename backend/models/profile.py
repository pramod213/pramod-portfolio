from pydantic import BaseModel, Field
from typing import Optional, List, Any
from datetime import date


class Skill(BaseModel):
    name: str
    category: str
    level: int = Field(ge=1, le=5, default=3)


class Project(BaseModel):
    id: str
    title: str
    description: str
    technologies: List[str]
    link: Optional[str] = None
    github: Optional[str] = None
    featured: bool = False
    highlights: List[str] = []
    architecture: Optional[str] = None


class Experience(BaseModel):
    id: str
    role: str
    company: str
    period: str
    location: Optional[str] = None
    description: str
    technologies: List[str] = []


class Education(BaseModel):
    id: str
    degree: str
    field: Optional[str] = None
    institution: str
    period: str
    description: Optional[str] = None


class Achievement(BaseModel):
    id: str
    title: str
    event: str
    organization: str
    date: str
    description: str
    icon: str


class Profile(BaseModel):
    name: str
    title: str
    bio: str
    email: str
    github: Optional[str] = None
    linkedin: Optional[str] = None
    twitter: Optional[str] = None
    resume: Optional[str] = None
    skills: List[Skill] = []
    projects: List[Project] = []
    experience: List[Experience] = []
    education: List[Education] = []
    achievements: List[Achievement] = []