import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Title, MainBox, Content, ChangeBtn } from "../style/LoginStyle";

const SignPage = () => {
  let [isIn, setIsIn] = useState(true);
  return (
    <>
      <MainBox>
        <Title>{isIn ? "로그인" : "회원가입"}</Title>
        {isIn ? (
          <Content>
            <SignIn />
          </Content>
        ) : (
          <Content>
            <SignUp />
          </Content>
        )}
        <ChangeBtn
          onClick={() => {
            setIsIn(!isIn);
          }}
        >
          {isIn ? "회원가입하기" : "로그인하기"}
        </ChangeBtn>
      </MainBox>
    </>
  );
};

export default SignPage;
