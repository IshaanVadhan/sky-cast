import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "X-Zomato-Api-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default axiosInstance;
