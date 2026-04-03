from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

router.get("/health")
def health_check():
    return {
        "status": "ok",
        "project": "Betrak",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    }
