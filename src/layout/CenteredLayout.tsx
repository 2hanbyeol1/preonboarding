import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function CenteredLayout() {
  return (
    <>
      <Header />
      <section className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen">
        <Outlet />
      </section>
    </>
  );
}

export default CenteredLayout;
