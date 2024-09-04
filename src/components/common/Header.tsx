import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem("accessToken");

  const handleLogoutClick = () => {
    sessionStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다!");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 flex justify-center w-screen h-12 bg-white z-50">
      <div className="w-full max-w-[1440px] px-5 flex justify-between items-center">
        <Button to="/">메인페이지</Button>
        <div className="flex gap-1">
          {isLoggedIn ? (
            <>
              <Button to="/user">회원정보</Button>
              <Button onClick={handleLogoutClick}>로그아웃</Button>
            </>
          ) : (
            <>
              <Button to="/login">로그인</Button>
              <Button to="/register">회원가입</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
