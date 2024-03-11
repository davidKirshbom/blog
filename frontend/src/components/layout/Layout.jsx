import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen   justify-center w-full dark:bg-gray-950 grid grid-rows-[auto_1fr] grid-cols-1">
      <Navbar />
      <div className="max-w-[1000px] w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
