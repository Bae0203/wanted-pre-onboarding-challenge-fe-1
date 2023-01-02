import axios from "axios";
import React, { useState } from "react";

interface userDataInterface {
  email: string;
  password: string;
}

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <span>
        <p>이메일</p>
        <input
          type={"text"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </span>
      <span>
        <p>비밀번호</p>
        <input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </span>
      <button
        onClick={() => {
          const userData: userDataInterface = {
            email: email,
            password: password,
          };
          console.log(userData);
        }}
      >
        로그인
      </button>
    </>
  );
};

export default SignIn;
