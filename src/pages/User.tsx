import { useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import ErrorList from "../components/common/ErrorList";
import ImageInput from "../components/common/ImageInput";
import Input from "../components/common/Input";
import { Loading } from "../components/common/Loading";
import { userQueryKeys } from "../hooks/queries/user/queryKey";
import { useGetUser, useUpdateProfile } from "../hooks/queries/user/useUser";
import { ProfileFormType } from "../types/user.type";
import { getRegisterOptions } from "../utils/validation";

function UserPage() {
  const {
    data: user,
    isPending: isGettingUser,
    isError: isGetUserError,
    error: getUserError,
  } = useGetUser();
  const {
    mutate: updateProfile,
    isPending: isUpdatingProfile,
    isError: isUpdateProfileError,
    error: updateUserError,
  } = useUpdateProfile();
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ProfileFormType>();
  const queryClient = useQueryClient();

  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) reset({ nickname: user.nickname });
  }, [user, reset]);

  if (isGettingUser || isUpdatingProfile) return <Loading />;
  if (isGetUserError || isUpdateProfileError)
    return (
      <div className="text-center">
        🚨 {getUserError?.message || updateUserError?.message}
      </div>
    );

  const handleEditButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditMode(true);
  };
  const handleCancelButtonClick = () => {
    reset({ avatarFiles: undefined, nickname: user.nickname });
    setEditMode(false);
  };
  const handleSubmit = (data: ProfileFormType) => {
    if (
      (data.avatarFiles && data.avatarFiles?.length > 0) ||
      user.nickname !== data.nickname
    )
      updateProfile(data, {
        onSuccess: (response) => {
          queryClient.setQueryData(userQueryKeys.all, {
            ...user,
            nickname: response.nickname,
            avatar: response.avatar || user.avatar,
          });
        },
      });
    setEditMode(false);
  };

  return (
    <div>
      <form
        className="flex flex-col items-center gap-y-1"
        onSubmit={onSubmit(handleSubmit)}
      >
        <ImageInput
          {...register("avatarFiles")}
          avatarFiles={watch("avatarFiles")}
          defaultAvatar={user.avatar}
          disabled={!isEditMode}
        />
        <div className="font-thin">{user.id}</div>
        <Input
          {...register("nickname", getRegisterOptions("닉네임", true, 4))}
          intent={isEditMode ? "secondary" : "transparent"}
          placeholder="nickname"
          fontSize="xl"
          py="xs"
          textAlign="center"
          readOnly={!isEditMode}
        />
        <div className="flex gap-1 mt-1">
          {isEditMode ? (
            <>
              <Button
                type="submit"
                intent="secondary"
                variant="outline"
                fontSize="md"
              >
                수정완료
              </Button>
              <Button
                type="button"
                intent="secondary"
                variant="outline"
                fontSize="md"
                onClick={handleCancelButtonClick}
              >
                수정취소
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                intent="secondary"
                variant="outline"
                fontSize="md"
                onClick={handleEditButtonClick}
              >
                수정하기
              </Button>
            </>
          )}
        </div>
      </form>
      <ErrorList errors={errors} />
    </div>
  );
}

export default UserPage;
