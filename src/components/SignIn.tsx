import axios from "axios";
import React, { useState } from "react";
import { isLogIn, loginToken } from "../store/isLogInAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Url: string = "http://localhost:8080";

let add: string = "";

const PostAxios = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await axios
    .post(Url + "/users/login", {
      email: email,
      password: password,
    })
    .then((e) => {
      let a: string = e.data.token;
      add = e.data.token;
      console.log("axios : ", a);
      localStorage.setItem("loginToken", a);
    })
    .catch((e) => {
      console.log(e);
    });
};
const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let [reloginToken, setLoginToken] = useRecoilState(loginToken);
  let setIsLogIn = useSetRecoilState(isLogIn);
  let Navigate = useNavigate();
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
          PostAxios({ email, password });
          setTimeout(() => {
            if (add != "") {
              alert("로그인 되었습니다!");
              setLoginToken(add);
              setIsLogIn(true);
              Navigate("/");
            } else {
              alert("정보가 일치하는 계정이 없습니다.");
            }
          }, 100);
        }}
      >
        로그인
      </button>
    </>
  );
};

export default SignIn;
