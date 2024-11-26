from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

# Модель користувача
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String, default="User")  # Роль користувача: "User" або "Admin"
    bookings = relationship("Booking", back_populates="user")

    # Функція для отримання всіх записів цього користувача
    def get_bookings(self):
        return self.bookings

# Модель фільму
class Movie(Base):
    __tablename__ = "movies"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())  # Дата створення фільму
    start_time = Column(DateTime, nullable=False)
    film_status = Column(Boolean, default=True)

    # Можна додати додаткові поля для адміністраторів

# Модель бронювання
class Booking(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    movie_id = Column(Integer, ForeignKey("movies.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())  # Дата створення бронювання
    cancelled = Column(Boolean, default=False)  # Поле для відміни бронювання

    user = relationship("User", back_populates="bookings")
    movie = relationship("Movie")


