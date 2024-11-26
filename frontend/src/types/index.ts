export type CreateSessions = {
  title: string;
  description: string;
  created_at: string;
  start_time: string;
};

export type User = {
  id: number;
  username: string;
};

export type UpdateFilm = {
  title: string;
  description: string;
  film_status: boolean;
};

export type Film = {
  id: number;
  film_status: boolean;
} & CreateSessions;

export type Booking = {
  id: number;
  cancelled: boolean;
  movie: Film;
};
