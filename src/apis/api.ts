import axios from "axios";
import router from "../router";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: sessionStorage.getItem("accessToken") },
});

export const updateToken = (token: string) => {
  client.defaults.headers.Authorization = token ? `Bearer ${token}` : "";
};

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          sessionStorage.removeItem("accessToken");
          router.navigate("/login");
          break;
      }

      throw new Error(error.response?.data.message);
    }
    throw error;
  }
);
