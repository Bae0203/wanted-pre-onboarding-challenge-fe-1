import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignPage = () => {
  let [isIn, setIsIn] = useState(true);
  return (
    <>
      <nav>
        {isIn ? (
          <>
            <p>로그인</p>
            <SignIn />
          </>
        ) : (
          <>
            <p>회원가입</p>
            <SignUp />
          </>
        )}
        <button
          onClick={() => {
            setIsIn(!isIn);
          }}
        >
          {isIn ? "회원가입하기" : "로그인하기"}
        </button>
      </nav>
    </>
  );
};

export default SignPage;
