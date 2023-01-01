import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/App";
import Auth from "./pages/SignPage";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
