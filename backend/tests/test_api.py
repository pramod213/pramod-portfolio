import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Portfolio API", "version": "1.0.0"}


def test_health():
    response = client.get("/api/v1/health/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["service"] == "portfolio-api"


def test_portfolio():
    response = client.get("/api/v1/portfolio")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert "title" in data
    assert "bio" in data
    assert "email" in data
    assert "skills" in data
    assert "projects" in data
    assert "experience" in data
    assert "education" in data
    assert "achievements" in data
    assert isinstance(data["skills"], list)
    assert isinstance(data["projects"], list)
    assert isinstance(data["experience"], list)
    assert isinstance(data["education"], list)
    assert isinstance(data["achievements"], list)


def test_contact_valid():
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "John Doe",
            "email": "john@example.com",
            "message": "Hello, this is a test message with sufficient length.",
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "message" in data


def test_contact_missing_name():
    response = client.post(
        "/api/v1/contact",
        json={
            "email": "john@example.com",
            "message": "Hello, this is a test message with sufficient length.",
        },
    )
    assert response.status_code == 422


def test_contact_invalid_email():
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "John Doe",
            "email": "not-an-email",
            "message": "Hello, this is a test message with sufficient length.",
        },
    )
    assert response.status_code == 422


def test_contact_missing_message():
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "John Doe",
            "email": "john@example.com",
        },
    )
    assert response.status_code == 422


def test_contact_short_message():
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "John Doe",
            "email": "john@example.com",
            "message": "Hi",
        },
    )
    assert response.status_code == 422


def test_contact_long_name():
    response = client.post(
        "/api/v1/contact",
        json={
            "name": "A" * 101,
            "email": "john@example.com",
            "message": "Hello, this is a test message with sufficient length.",
        },
    )
    assert response.status_code == 422