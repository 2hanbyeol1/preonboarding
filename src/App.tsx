import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Modal from "./components/common/Modal";
import router from "./router";
import useModalStore from "./store/modal.store";

function App() {
  const queryClient = new QueryClient();
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
