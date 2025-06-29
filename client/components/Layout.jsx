import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
