import { FC, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useModal } from "../hooks/useModal";
import CreateSessionModal from "../component/modals/create-seans-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { authApi } from "../utils/store";
import { Film } from "../types";
import UpdateSessionModal from "../component/modals/update-seans-modal";
import toast from "react-hot-toast";
import { api } from "../utils/server";
import { useSubscribe } from "../hooks/useSubscribe";

const Home: FC = () => {
  const { user } = useAuth();
  const client = useQueryClient();
  const [active, setActive] = useState<null | number>(null);
  const createSessionProps = useModal();
  const updateSessionProps = useModal();

  const { data: subscribe } = useSubscribe();

  const { data } = useQuery("movies", async () => {
    const response = await api.get<Film[]>("/movies/");
    return response;
  });

  const { mutateAsync: deleteFilm } = useMutation(
    "movies",
    async (id: number) => {
      const response = await authApi.delete(`/movies/${id}`);
      client.refetchQueries("movies");
      return response;
    }
  );

  const { mutateAsync: registerUser } = useMutation(
    "book_movie",
    async (movieId: number) => {
      const response = await authApi.post(`/bookings/book_movie/${movieId}`);
      client.refetchQueries("book_movie");
      client.refetchQueries("bookings");
      return response;
    }
  );

  const handleClickRegister = async (id: number) => {
    try {
      await registerUser(id);
      toast.success("Регістрація успішна!");
    } catch (err) {
      console.log(err);
      toast.error("Щсоь пішло не по плану!");
    }
  };

  const handleClickDelete = async (id: number) => {
    try {
      await deleteFilm(id);
      toast.success("Сеанс було скасовано");
    } catch {
      toast.error("Сеанс не можливо скасувати!");
    }
  };

  const checkIfUserIsRegistered = (
    movieId: number,
    bookings: {
      id: number;
      user_id: number;
      movie_id: number;
      cancelled: boolean;
    }[]
  ) => {
    return bookings.some(
      (booking) => booking.movie_id === movieId && !booking.cancelled
    );
  };

  const getIsUserRegistered = (movie: Film) => {
    return checkIfUserIsRegistered(movie.id, subscribe?.data?.bookings ?? []);
  };

  return (
    <section className="flex flex-col mt-[60px]">
      <div className="flex">
        <h1 className="flex-1 font-semibold text-[22px] text-center w-full">
          Фільми які зараз в прокаті
        </h1>

        {user?.role === "Admin" && (
          <button
            className="font-semibold hover:text-orange-400"
            onClick={createSessionProps.onOpen}
          >
            Створити сеанс
          </button>
        )}
      </div>
      {user?.role === undefined && (
        <p className="w-full bg-red-400 text-white text-center font-semibold">
          Для запису на фільм вам потрібно зреєструватись!
        </p>
      )}
      <div>
        <div className="bg-gray-200 px-6 py-6 rounded-lg flex flex-col gap-5">
          {[...(data?.data ?? [])]
            .sort(
              (a, b) =>
                new Date(a.start_time).getTime() -
                new Date(b.start_time).getTime()
            )
            .map((movie) => (
              <div
                key={movie.id}
                className="flex border border-b-gray-300 border-b-[2px]"
              >
                <div>
                  <h2 className="font-semibold text-[18px]">{movie.title}</h2>
                  <p className="text-[14px]">{movie.description}</p>
                  <p>
                    <strong>Дата проведення - </strong>
                    {new Date(movie.start_time).toLocaleDateString("uk-UA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {user?.role ? (
                  <>
                    {user?.role === "User" ? (
                      <>
                        {getIsUserRegistered(movie) ? (
                          <div className="flex flex-col justify-center px-5">
                            Записаний
                          </div>
                        ) : (
                          <div className="flex flex-col justify-center">
                            <button
                              className="flex-1 bg-emerald-500 text-white font-semibold hover:opacity-60 px-5"
                              onClick={() => {
                                handleClickRegister(movie.id);
                              }}
                            >
                              Записатись
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col justify-center">
                        <button
                          onClick={() => {
                            setActive(movie.id);
                            updateSessionProps.onOpen();
                          }}
                          className="flex-1 bg-orange-400 text-white font-semibold hover:opacity-60 px-5"
                        >
                          Змінити
                        </button>
                        <button
                          className="flex-1 bg-red-400 text-white font-semibold hover:opacity-60 px-5"
                          onClick={() => {
                            handleClickDelete(movie.id);
                          }}
                        >
                          Скасувати
                        </button>
                      </div>
                    )}
                  </>
                ) : null}
              </div>
            ))}
        </div>
      </div>
      <CreateSessionModal {...createSessionProps} />
      <UpdateSessionModal {...updateSessionProps} activeId={active} />
    </section>
  );
};

export default Home;
