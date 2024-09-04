import { LoginType, ProfileType, RegisterType } from "../types/user.type";
import { client } from "./api";

export async function register(data: RegisterType) {
  const response = await client.post("/register", data);
  return response.data;
}

export async function login(data: LoginType) {
  const response = await client.post("/login?expiresIn=10m", data);
  return response.data;
}

export async function getUser() {
  const response = await client.get("/user");
  return response.data;
}

export async function updateProfile(data: ProfileType) {
  const formData = new FormData();
  formData.append("avatar", data?.avatar as File);
  formData.append("nickname", data.nickname);
  const response = await client.patch("/profile", formData);
  return response.data;
}
