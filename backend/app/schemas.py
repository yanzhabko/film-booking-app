from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class UserCreate(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    role: Optional[str] = "User"

    class Config:
        orm_mode = True


class MovieCreate(BaseModel):
    title: str
    description: str
    start_time: datetime 
    film_status: Optional[bool] = True

class MovieResponse(BaseModel):
    id: int
    title: str
    description: str
    start_time: datetime
    film_status: bool

    class Config:
        orm_mode = True

class MovieUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    start_time: Optional[datetime]
    film_status: Optional[bool]

    class Config:
        orm_mode = True        


class BookingResponse(BaseModel):
    id: int
    movie: MovieResponse

    class Config:
        orm_mode = True
