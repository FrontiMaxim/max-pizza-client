import { Route, Routes } from "react-router";
import { Layout } from "./layout";
import { PageAuthConfirm } from "../pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}></Route>
    <Route path="auth/confirm" element={<PageAuthConfirm />}></Route>
  </Routes>
);
