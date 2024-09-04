import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "" },
});

export const updateToken = (token: string) => {
  client.defaults.headers.Authorization = token ? `Bearer ${token}` : "";
};
