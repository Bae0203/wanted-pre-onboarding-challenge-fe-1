import React, { useEffect, useState } from "react";

const SignUp = () => {
  let ChEmail: RegExp = /^[a-zA-Z0-9]+@+[a-zA-Z0-9.]+\\.[a-zA-Z]{2,6}$/; // 아무 문자@아무문자.아무문자(2~6개까지)
  let ChPassword: RegExp = /^.{8,}$/; //8글자 이상
  let [isEmail, setIsEmail] = useState<boolean>(true);
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [chPass, setChPass] = useState<string>("");
  let [isPassword, setIsPassword] = useState<boolean>(false);

  useEffect(() => {
    if (password == chPass) {
      if (password != "") {
        setIsPassword(true);
      }
    } else {
      setIsPassword(false);
    }
  }, [chPass]);

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
        {isPassword
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."}
      </p>
      <button>회원가입</button>
    </>
  );
};

export default SignUp;
