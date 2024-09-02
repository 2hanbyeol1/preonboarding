import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <section className="max-w-[1440px] mt-12 mx-auto px-5">
        <Outlet />
      </section>
    </>
  );
}

export default MainLayout;
