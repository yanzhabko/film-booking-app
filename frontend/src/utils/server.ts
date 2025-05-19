import axios from "axios";

export const api = axios.create({
  baseURL: "https://film-booking-app.onrender.com/",
});
