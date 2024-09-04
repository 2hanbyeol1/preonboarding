import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import ErrorList from "../components/common/ErrorList";
import Input from "../components/common/Input";
import { useRegister } from "../hooks/queries/user/useUser";
import { RegisterType } from "../types/user.type";
import { getRegisterOptions } from "../utils/validation";

function RegisterPage() {
  const { mutate: registerUser, isPending } = useRegister();
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<RegisterType>();

  const handleSubmit = (data: RegisterType) => {
    registerUser(data);
  };

  if (isPending) return <div>loading...</div>;

  return (
    <div>
      <form className="flex flex-col gap-y-3" onSubmit={onSubmit(handleSubmit)}>
        <Input
          {...register("id", getRegisterOptions("아이디", true, 4))}
          placeholder="id"
        />
        <Input
          {...register("password", getRegisterOptions("비밀번호", true, 4))}
          type="password"
          placeholder="password"
        />
        <Input
          {...register("nickname", getRegisterOptions("닉네임", true))}
          placeholder="nickname"
        />
        <Button fontSize="md">회원가입</Button>
      </form>
      <ErrorList errors={errors} />
    </div>
  );
}

export default RegisterPage;
