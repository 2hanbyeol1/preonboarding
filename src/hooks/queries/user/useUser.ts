import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useRegister = () =>
  useMutation({
    mutationFn: (data: RegisterType) => register(data),
    onSuccess: (response) => {
      alert(response.message);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginType) => login(data),
    onSuccess: (response) => {
      alert(`${response.nickname}님 환영합니다`);
      updateToken(response.accessToken);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

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
