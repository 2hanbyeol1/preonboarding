import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";
import RegisterPage from "../pages/Register";
import UserPage from "../pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader() {
          if (sessionStorage.getItem("accessToken")) return redirect("/");
          return null;
        },
      },
      {
        path: "/register",
        element: <RegisterPage />,
        loader() {
          if (sessionStorage.getItem("accessToken")) return redirect("/");
          return null;
        },
      },
      {
        path: "/user",
        element: <UserPage />,
        loader() {
          if (!sessionStorage.getItem("accessToken")) return redirect("/login");
          return null;
        },
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default router;
