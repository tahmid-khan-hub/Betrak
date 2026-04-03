from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.core.database import engine, Base
from app.api.v1.routes import predict, health

''' first time start the server in local -> uvicorn main:app --reload --port 8000'''

### start server command -> uvicorn main:app --reload

# create all db tables on startup
@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    print("✅ Database tables created")
    print(f"🚀 Betrak is running in {settings.APP_ENV} mode")
    yield
    print("🛑 Betrak is shutting down")

# app instance
app = FastAPI(
    title="Betrak API",
    description="Social Media Addiction Predictor API",
    version="1.0.0",
    lifespan=lifespan
)

# cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# routers
app.include_router(health.router, prefix="/api/v1", tags=["Health"])
app.include_router(predict.router, prefix="/api/v1", tags=["Prediction"])
