import React from "react";

const SignIn = () => {
  return (
    <>
      <span>
        <p>이메일</p>
        <input type={"text"} placeholder={"Email"} />
      </span>
      <span>
        <p>비밀번호</p>
        <input type={"password"} placeholder={"Password"} />
      </span>
      <button>로그인</button>
    </>
  );
};

export default SignIn;
