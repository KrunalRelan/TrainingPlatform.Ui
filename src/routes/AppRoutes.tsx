import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
