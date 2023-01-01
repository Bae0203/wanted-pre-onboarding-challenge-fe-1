import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
