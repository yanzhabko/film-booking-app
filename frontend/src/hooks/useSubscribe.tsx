import { useQuery } from "react-query";
import { authApi } from "../utils/store";

export const useSubscribe = () =>
  useQuery("registered-events", async () => {
    const response = await authApi.get(
      "https://film-booking-app.onrender.com/bookings/user_book/"
    );
    return response;
  });
