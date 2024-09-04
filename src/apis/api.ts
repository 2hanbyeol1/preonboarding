import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "" },
});

export const updateToken = (token: string) => {
  client.defaults.headers.Authorization = token ? `Bearer ${token}` : "";
};

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error))
      switch (error.response?.status) {
        case 401:
          console.log(401);
          break;
        default:
          throw new Error(error.response?.data.message);
      }
    throw error;
  }
);
