# Portfolio Monorepo

A full-stack portfolio application with React frontend and FastAPI backend.

## Project Structure

```
project-root/
├── frontend/          # React + Vite + TailwindCSS + Framer Motion
├── backend/           # FastAPI + Python 3.12+
├── docker-compose.yml # Local production-like deployment
└── render.yaml        # Render deployment configuration
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

## Docker Deployment (Local)

### Prerequisites
- Docker
- Docker Compose

### Build and Run

```bash
# Build images
docker compose build

# Start services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

Services:
- Frontend: http://localhost (port 80)
- Backend: http://localhost:8000
- API Health: http://localhost:8000/api/v1/health/
- API Portfolio: http://localhost:8000/api/v1/portfolio/

### Docker Compose Notes
- Frontend uses `nginx.conf` with `/api/` proxy to backend
- Backend listens on port 8000
- Both services share a Docker network

## Production Deployment (Render)

### Architecture

```
Internet
    ↓
Render
    ↓
┌─────────────────┐     ┌─────────────────┐
│ Frontend Service │     │ Backend Service  │
│ (Nginx + React)  │────▶│ (FastAPI)        │
└─────────────────┘     └─────────────────┘
```

### Deploy via Render Dashboard

1. Connect your GitHub repository to Render
2. Create a new **Web Service** for the backend:
   - Runtime: Docker
   - Dockerfile: `backend/Dockerfile`
   - Build Context: `./backend`
   - Health Check Path: `/api/v1/health/`
   - Environment Variables:
     - `APP_NAME=Portfolio API`
     - `DEBUG=false`
     - `API_V1_PREFIX=/api/v1`
     - `CORS_ORIGINS=["https://<your-frontend>.onrender.com"]`
     - `FRONTEND_URL=https://<your-frontend>.onrender.com`

3. Create a new **Web Service** for the frontend:
   - Runtime: Docker
   - Dockerfile: `frontend/Dockerfile`
   - Build Context: `./frontend`
   - Health Check Path: `/`
   - Environment Variables:
     - `VITE_API_BASE_URL=https://<your-backend>.onrender.com/api/v1`

### Deploy via Infrastructure as Code (render.yaml)

The repository includes a `render.yaml` file for Blue/Green deployments:

```bash
# Install Render CLI
npm install -g @render/cli

# Deploy
render deploy
```

Or use the Render Dashboard "Deploy from Blueprint" feature.

### Environment Variables

**Backend (Production):**
- `APP_NAME=Portfolio API`
- `DEBUG=false`
- `API_V1_PREFIX=/api/v1`
- `CORS_ORIGINS=["https://<frontend-service>.onrender.com"]`
- `FRONTEND_URL=https://<frontend-service>.onrender.com`

**Frontend (Production):**
- `VITE_API_BASE_URL=https://<backend-service>.onrender.com/api/v1`

### Render-Specific Notes
- Backend binds to `$PORT` (provided by Render) with fallback to 8000
- Frontend uses production Nginx config (`nginx.prod.conf`) without `/api/` proxy
- Frontend calls backend directly via `VITE_API_BASE_URL`
- HTTPS is automatic via Render's `.onrender.com` domains
- Free tier services spin down after inactivity

## Available API Endpoints

- `GET /` - Root endpoint
- `GET /api/v1/health/` - Health check
- `GET /api/v1/portfolio/` - Get portfolio data
- `POST /api/v1/contact/` - Submit contact form

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