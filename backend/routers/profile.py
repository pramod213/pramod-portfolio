from fastapi import APIRouter
from models.profile import Profile, Skill, Project, Experience, Education

router = APIRouter(prefix="/profile", tags=["profile"])


@router.get("/", response_model=Profile)
async def get_profile():
    return Profile(
        name="John Developer",
        title="Full Stack Developer",
        bio="Building modern web applications with React, Node.js, and cloud technologies. Passionate about clean code and great user experiences.",
        email="john@example.com",
        github="https://github.com/johndeveloper",
        linkedin="https://linkedin.com/in/johndeveloper",
        twitter="https://twitter.com/johndeveloper",
        skills=[
            Skill(name="React", category="Frontend", level=5),
            Skill(name="TypeScript", category="Frontend", level=4),
            Skill(name="TailwindCSS", category="Frontend", level=4),
            Skill(name="Framer Motion", category="Frontend", level=3),
            Skill(name="Node.js", category="Backend", level=5),
            Skill(name="Python", category="Backend", level=4),
            Skill(name="FastAPI", category="Backend", level=4),
            Skill(name="PostgreSQL", category="Backend", level=4),
            Skill(name="Docker", category="DevOps", level=4),
            Skill(name="AWS", category="DevOps", level=3),
            Skill(name="CI/CD", category="DevOps", level=4),
        ],
        projects=[
            Project(
                id="1",
                title="E-Commerce Platform",
                description="Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
                technologies=["React", "Node.js", "PostgreSQL", "Stripe"],
                link="https://example.com",
                github="https://github.com/example/ecommerce",
                featured=True,
            ),
            Project(
                id="2",
                title="Task Management App",
                description="Real-time collaborative task manager with drag-and-drop, notifications, and team workspaces.",
                technologies=["Vue.js", "Firebase", "TailwindCSS"],
                link="https://example.com",
                github="https://github.com/example/taskmanager",
                featured=True,
            ),
            Project(
                id="3",
                title="API Gateway Service",
                description="High-performance API gateway with rate limiting, authentication, and request routing.",
                technologies=["Go", "Redis", "Docker", "Kubernetes"],
                link="https://example.com",
                github="https://github.com/example/apigateway",
                featured=False,
            ),
        ],
        experience=[
            Experience(
                id="1",
                role="Senior Software Engineer",
                company="Tech Corp",
                period="2022 - Present",
                description="Leading frontend architecture for enterprise applications. Mentoring junior developers and establishing best practices.",
                technologies=["React", "TypeScript", "GraphQL", "AWS"],
            ),
            Experience(
                id="2",
                role="Full Stack Developer",
                company="StartupXYZ",
                period="2020 - 2022",
                description="Built and maintained multiple client projects. Implemented CI/CD pipelines and improved deployment processes.",
                technologies=["React", "Node.js", "PostgreSQL", "Docker"],
            ),
            Experience(
                id="3",
                role="Junior Developer",
                company="Digital Agency",
                period="2018 - 2020",
                description="Developed responsive websites and web applications. Collaborated with designers and project managers.",
                technologies=["JavaScript", "React", "CSS", "Git"],
            ),
        ],
        education=[
            Education(
                id="1",
                degree="Bachelor of Science in Computer Science",
                institution="University of Technology",
                period="2014 - 2018",
                description="Focus on Software Engineering and Web Technologies",
            ),
        ],
    )