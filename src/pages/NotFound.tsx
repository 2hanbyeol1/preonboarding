import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-7xl font-bold">404</h1>
        <div className="text-xl">Page not Found :(</div>
      </div>
      <Button
        intent="secondary"
        variant="outline"
        fontSize="md"
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로 돌아가기
      </Button>
    </div>
  );
}

export default NotFound;
