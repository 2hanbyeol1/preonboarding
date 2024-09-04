import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import ErrorList from "../components/common/ErrorList";
import Input from "../components/common/Input";
import { useLogin } from "../hooks/queries/user/useUser";
import { LoginType } from "../types/user.type";
import { getRegisterOptions } from "../utils/validation";

function LoginPage() {
  const { mutate: login } = useLogin();
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const handleSubmit = (data: LoginType) => {
    login(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
      <form className="flex flex-col gap-y-3" onSubmit={onSubmit(handleSubmit)}>
        <Input
          {...register("id", getRegisterOptions("아이디", true, 4))}
          placeholder="id"
        />
        <Input
          {...register("password", getRegisterOptions("비밀번호", true, 4))}
          placeholder="password"
          type="password"
        />
        <Button fontSize="md">로그인</Button>
      </form>
      <ErrorList errors={errors} />
    </div>
  );
}

export default LoginPage;
