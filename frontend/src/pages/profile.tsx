import { FC } from "react";
import { useQuery, useQueryClient } from "react-query";
import { authApi } from "../utils/store";
import { Booking } from "../types";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

const Profile: FC = () => {
  const client = useQueryClient();
  const { data } = useQuery("profile", async () => {
    const response = await authApi.get<Booking[]>("/profile/");
    return response.data;
  });

  const { mutateAsync: сancelBooking } = useMutation(
    "cancel_booking",
    async (movieId: number) => {
      const response = await authApi.delete(
        `/bookings/cancel_booking/${movieId}`
      );
      client.refetchQueries("cancel_booking");
      client.refetchQueries("bookings");
      return response;
    },
    {
      onSuccess: () => {
        client.invalidateQueries("profile");
      },
    }
  );

  const handleClickCancel = async (id: number) => {
    try {
      await сancelBooking(id);
      toast.success("Запис скасований!");
    } catch (err) {
      console.log(err);
      toast.error("Щсоь пішло не по плану!");
    }
  };

  return (
    <section className="flex flex-col mt-[60px]">
      <h1 className="font-semibold text-[22px] text-start w-full">Записи</h1>
      <div>
        <div className="bg-gray-200 px-6 py-6 rounded-lg flex flex-col gap-5">
          {data && data.length === 0 ? (
            <p>У вас немає записів.</p>
          ) : (
            <>
              {" "}
              {[...(data ?? [])]
                .sort(
                  (a, b) =>
                    new Date(a.movie.start_time).getTime() -
                    new Date(b.movie.start_time).getTime()
                )
                .map((record) => (
                  <div
                    key={record.id}
                    className="flex border border-b-gray-300 border-b-[2px]"
                  >
                    <div>
                      <h2 className="font-semibold text-[18px]">
                        {record.movie.title}
                      </h2>
                      <p className="text-[14px]">{record.movie.description}</p>{" "}
                      <p>
                        <strong>Дата проведення - </strong>
                        {new Date(record.movie.start_time).toLocaleDateString(
                          "uk-UA",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      {record.movie.film_status ? (
                        <span className="text-red-500">Сеанс пройшов</span>
                      ) : (
                        <span className="text-green-500">Активний</span>
                      )}
                    </div>
                    <button
                      className="flex-1 bg-red-400 text-white font-semibold hover:opacity-60 px-5"
                      onClick={() => handleClickCancel(record.id)}
                    >
                      Скасувати
                    </button>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
