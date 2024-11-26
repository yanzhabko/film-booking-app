from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User, Movie, Booking
from app.auth import get_current_user 

router = APIRouter()

@router.post("/book_movie/{movie_id}")
def book_movie(movie_id: int, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    existing_booking = db.query(Booking).filter(
        Booking.movie_id == movie_id,
        Booking.user_id == current_user.id,
        Booking.cancelled == False
    ).first()

    if existing_booking:
        raise HTTPException(status_code=400, detail="Ви вже зареєстровані на цей сеанс.")

    new_booking = Booking(movie_id=movie_id, user_id=current_user.id)
    db.add(new_booking)
    db.commit()
    return {"message": "Успішно зареєстровано!"}


@router.delete("/cancel_booking/{booking_id}")
def cancel_booking(booking_id: int,  db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    booking = db.query(Booking).filter(Booking.id == booking_id, Booking.user_id == current_user.id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    try:
        db.delete(booking)  # Видаляємо бронювання з бази даних
        db.commit()  # Комітимо зміни
    except Exception as e:
        db.rollback()  # У випадку помилки відкочуємо зміни
        raise HTTPException(status_code=500, detail=f"Error while deleting booking: {str(e)}")
    
    return {"message": "Booking deleted successfully"}




@router.get("/user_book")
def get_user_bookings(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    bookings = current_user.get_bookings()
    return {"bookings": bookings}
