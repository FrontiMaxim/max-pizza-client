import { Route, Routes } from "react-router";
import { PageSignUp, PageSignUpSuccess } from "../pages";

export const Router = () => (
  <Routes>
    <Route path="auth">
      <Route path="sign-up" element={<PageSignUp />} />
      <Route path="success" element={<PageSignUpSuccess />} />
      <Route path="sign-in" element={<div>Sign in</div>} />
    </Route>
  </Routes>
);
