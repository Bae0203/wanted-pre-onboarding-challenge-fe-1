import React from "react";

const SignUp = () => {
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
      <span>
        <p>비밀번호 확인</p>
        <input type={"password"} placeholder={"PasswordCheck"} />
      </span>
      <button>회원가입</button>
    </>
  );
};

export default SignUp;
