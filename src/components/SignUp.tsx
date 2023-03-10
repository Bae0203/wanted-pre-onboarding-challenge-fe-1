import axios from "axios";
import React, { useEffect, useState } from "react";
import { loginToken, isLogIn } from "../store/isLogInAtom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Url: string = "http://localhost:8080";

const UserInfoCheckBox = styled.div`
  margin: auto 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ check }: { check: any }) =>
    check ? "#628E3d" : "#f0473d"};
`;

const Label = styled.div`
  display: flex;
`;

let add: string = "";

const PostAxios = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await axios
    .post(Url + "/users/create", {
      email: email,
      password: password,
    })
    .then((e) => {
      let a: string = e.data.token;
      add = e.data.token;
      localStorage.setItem("loginToken", a);
    })
    .catch((e) => {});
};

const SignUp = () => {
  let [reloginToken, setLoginToken] = useRecoilState(loginToken);
  let Navigate = useNavigate();
  let ChEmail: RegExp = /^[a-zA-Z0-9]+@+[a-zA-Z0-9.]+\.[a-zA-Z]{2,6}$/; // 아무 문자@아무문자.아무문자(2~6개까지)
  let ChPassword: RegExp = /^.{8,}$/; //8글자 이상
  let [isEmail, setIsEmail] = useState<boolean>(false);
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [chPass, setChPass] = useState<string>("");
  let [isPassword, setIsPassword] = useState<boolean>(false);
  let [isSamePassword, setIsSamePassword] = useState<boolean>(false);

  useEffect(() => {
    if (password == chPass && password != "") {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }

    if (ChEmail.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }

    if (ChPassword.test(password)) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  }, [chPass, email, password]);

  return (
    <>
      <p>이메일 (이메일 형식으로 입력해주세요)</p>
      <Label>
        <input
          type={"text"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <UserInfoCheckBox check={isEmail} />
      </Label>
      <p>비밀번호 (8자리 이상으로 입력해주세요)</p>
      <Label>
        <input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <UserInfoCheckBox check={isPassword} />
      </Label>
      <span>
        <p>비밀번호 확인</p>
        <input
          type={"password"}
          placeholder={"PasswordCheck"}
          value={chPass}
          onChange={(e) => {
            setChPass(e.target.value);
          }}
        />
      </span>
      <p>
        {isSamePassword
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."}
      </p>
      <button
        onClick={() => {
          if (isSamePassword && isEmail && isPassword) {
            PostAxios({ email, password });
            // let a: string | null = localStorage.getItem("loginToken");
            setTimeout(() => {
              if (add != "") {
                alert("회원가입 되었습니다!");
                setLoginToken(add);
                Navigate("/");
              } else {
                alert("계정이 있습니다.");
              }
            }, 100);
          } else {
            alert("정보를 제대로 입력해주세요");
          }
        }}
      >
        회원가입
      </button>
    </>
  );
};

export default SignUp;
