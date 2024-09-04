import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateToken } from "../../../apis/api";
import {
  getUser,
  login,
  register,
  updateProfile,
} from "../../../apis/user.api";
import {
  LoginType,
  ProfileFormType,
  RegisterType,
} from "../../../types/user.type";
import { userQueryKeys } from "./queryKey";

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: RegisterType) => register(data),
    onSuccess: (response) => {
      alert(response.message);
      navigate("/login");
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginType) => login(data),
    onSuccess: (response) => {
      alert(`${response.nickname}님 환영합니다!`);
      sessionStorage.setItem("accessToken", `Bearer ${response.accessToken}`);
      updateToken(response.accessToken);
      navigate("/");
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useGetUser = () =>
  useQuery({
    queryKey: userQueryKeys.all,
    queryFn: () => getUser(),
  });

export const useUpdateProfile = () =>
  useMutation({
    mutationFn: (data: ProfileFormType) =>
      updateProfile({ avatar: data.avatarFiles?.[0], nickname: data.nickname }),
    onSuccess: (response) => {
      alert(response.message);
    },
  });
