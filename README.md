# Portfolio Monorepo

A full-stack portfolio application with React frontend and FastAPI backend.

## Project Structure

```
project-root/
├── frontend/          # React + Vite + TailwindCSS + Framer Motion
└── backend/           # FastAPI + Python 3.12+
```

## Frontend Setup

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Frontend will be available at: http://localhost:5173

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors
npm run format        # Format code with Prettier
```

## Backend Setup

### Prerequisites
- Python 3.11+

### Installation

```bash
cd backend

# Create virtual environment (Windows)
py -3.12 -m venv venv
venv\Scripts\activate

# Create virtual environment (macOS/Linux)
python3.11 -m venv venv
source venv/bin/activate

# Upgrade pip
python -m pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

### Development

```bash
# With virtual environment activated
uvicorn main:app --reload
```

Backend will be available at: http://127.0.0.1:8000

API Documentation:
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Available API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /api/v1/profile/` - Get profile data

## Tech Stack

### Frontend
- React 18
- Vite 5
- TailwindCSS 3
- Framer Motion 11
- ESLint + Prettier

### Backend
- FastAPI 0.115
- Uvicorn 0.32
- Pydantic 2
- Pydantic Settings
- Python Dotenv

## Git Ignore

The following are ignored:
- `backend/venv/` - Python virtual environment
- `frontend/node_modules/` - Node dependencies
- `*.env` - Environment files
- `__pycache__/` - Python cache
- `dist/` / `build/` - Build outputs