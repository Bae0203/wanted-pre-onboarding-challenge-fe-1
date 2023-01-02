import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderSt,
  HeaderNav,
  HeaderTitle,
  HeaderP,
} from "../style/HeaderStyle";
import { isLogIn } from "../store/isLogInAtom";

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
      <button
        onClick={() => {
          let a = Object.keys(localStorage);
          console.log(a);
        }}
      >
        Token??
      </button>
      <HeaderNav>
        {isLogIn ? (
          <HeaderP
            onClick={() => {
              Navigate("/auth");
            }}
          >
            SignIn
          </HeaderP>
        ) : (
          <HeaderP>Logout</HeaderP>
        )}
      </HeaderNav>
    </HeaderSt>
  );
};

export default Header;
