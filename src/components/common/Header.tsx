import Button from "./Button";

function Header() {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-screen h-12 px-2 mb-7 bg-white">
      <Button to="/">메인페이지</Button>
      <div className="flex gap-1">
        <Button to="/login">로그인</Button>
        <Button to="/register">회원가입</Button>
        <Button to="/user">회원정보</Button>
      </div>
    </header>
  );
}

export default Header;
