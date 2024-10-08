import * as Sentry from "@sentry/react";
import { createBrowserRouter, redirect } from "react-router-dom";
import CenteredLayout from "../layout/CenteredLayout";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/Login";
import MainPage from "../pages/main/Main";
import PostDetailPage from "../pages/main/PostDetail";
import NotFound from "../pages/NotFound";
import RegisterPage from "../pages/Register";
import UserPage from "../pages/User";

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter);

const router = sentryCreateBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/post/:postId",
        element: <PostDetailPage />,
        loader({ params }: { params: { postId: string } }) {
          if (!params.postId) return redirect("/");
          return null;
        },
      },
    ],
  },
  {
    path: "/",
    element: <CenteredLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
        loader() {
          if (sessionStorage.getItem("accessToken")) return redirect("/");
          return null;
        },
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
        path: "/user",
        element: <UserPage />,
        loader() {
          if (!sessionStorage.getItem("accessToken")) return redirect("/login");
          return null;
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
