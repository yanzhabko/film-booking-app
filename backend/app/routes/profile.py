from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Booking
from app.schemas import BookingResponse
from app.auth import get_current_user

router = APIRouter()

@router.get("/", response_model=list[BookingResponse])
def get_user_bookings(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    return db.query(Booking).filter(Booking.user_id == current_user.id).all()

