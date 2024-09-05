// Imports
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// To Test
import Header from "../../../components/common/Header";

// Tests
describe("Header Component", () => {
  beforeEach(() => {
    // Clear the sessionStorage before each test
    sessionStorage.clear();
  });

  test("로그인 상태가 아닐 때 로그인/회원가입 버튼 렌더링", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("로그인")).toBeInTheDocument();
    expect(screen.getByText("회원가입")).toBeInTheDocument();
  });

  test("로그인 상태일 때 회원정보/로그아웃 버튼 렌더링", () => {
    sessionStorage.setItem("accessToken", "Bearer ~~~");
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("회원정보")).toBeInTheDocument();
    expect(screen.getByText("로그아웃")).toBeInTheDocument();
  });
});
