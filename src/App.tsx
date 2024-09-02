import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modal from "./components/common/Modal";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";
import UserPage from "./pages/User";
import useModalStore from "./store/modal.store";

function App() {
  const queryClient = new QueryClient();

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
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/user",
          element: <UserPage />,
        },
      ],
    },
  ]);

  const modalOptions = useModalStore((store) => store.modalOptions);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {modalOptions && <Modal {...modalOptions} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
