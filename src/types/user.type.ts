type IdType = string;
type PasswordType = string;
type NicknameType = string;
type AvatarType = string | File | undefined;

export type RegisterType = {
  id: IdType;
  password: PasswordType;
  nickname: NicknameType;
};

export type LoginType = {
  id: IdType;
  password: PasswordType;
};

export type UserType = {
  id: IdType;
  nickname: NicknameType;
  avatar: AvatarType;
};

export type ProfileType = {
  nickname: NicknameType;
  avatar: AvatarType;
};

export type ProfileFormType = Omit<ProfileType, "avatar"> & {
  avatarFiles?: FileList;
};
