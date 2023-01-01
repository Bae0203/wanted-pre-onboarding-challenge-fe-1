import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderSt,
  HeaderNav,
  HeaderTitle,
  HeaderP,
} from "../style/HeaderStyle";

const Header = () => {
  let Navigate = useNavigate();
  return (
    <HeaderSt>
      <HeaderTitle
        onClick={() => {
          Navigate("/");
        }}
      >
        Todo List
      </HeaderTitle>

      <HeaderNav>
        <HeaderP
          onClick={() => {
            Navigate("/auth");
          }}
        >
          SignIn
        </HeaderP>
        <HeaderP>Logout</HeaderP>
      </HeaderNav>
    </HeaderSt>
  );
};

export default Header;
