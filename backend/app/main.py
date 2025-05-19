from . import models, database
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, movies, bookings, profile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def server():
    return 'server run!'

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(movies.router, prefix="/movies", tags=["Movies"])
app.include_router(bookings.router, prefix="/bookings", tags=["Bookings"])
app.include_router(profile.router, prefix="/profile", tags=["Profile"])

app.mount("/assets", StaticFiles(directory="../frontend/dist", html=True), name="static")


@app.get("/{full_path:path}")
async def serve_vue_app(full_path: str):
    index_file = "../frontend/dist" / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"detail": "index.html not found"}