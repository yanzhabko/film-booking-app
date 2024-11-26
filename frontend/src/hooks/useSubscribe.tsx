import { useQuery } from "react-query";
import { authApi } from "../utils/store";

export const useSubscribe = () =>
  useQuery("registered-events", async () => {
    const response = await authApi.get(
      "http://localhost:8000/bookings/user_book"
    );
    return response;
  });
