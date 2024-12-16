import { Outlet } from "react-router";
import { Header } from "../widgets";

export const Layout = () => (
  <div className="bg-white rounded-[15px]">
    <Header />
    <Outlet />
  </div>
);
