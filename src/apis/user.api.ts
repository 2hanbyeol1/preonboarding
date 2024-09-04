import axios from "axios";
import { LoginType, ProfileType, RegisterType } from "../types/user.type";
import { client } from "./api";

export async function register(data: RegisterType) {
  try {
    const response = await client.post("/register", data);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) throw new Error(e.response?.data.message);
    throw e;
  }
}

export async function login(data: LoginType) {
  try {
    const response = await client.post("/login?expiresIn=10m", data);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) throw new Error(e.response?.data.message);
    throw e;
  }
}

export async function getUser() {
  try {
    const response = await client.get("/user");
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) throw new Error(e.response?.data.message);
    throw e;
  }
}

export async function updateProfile(data: ProfileType) {
  try {
    const formData = new FormData();
    formData.append("avatar", data?.avatar as File);
    formData.append("nickname", data.nickname);
    const response = await client.patch("/profile", formData);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) throw new Error(e.response?.data.message);
    throw e;
  }
}
