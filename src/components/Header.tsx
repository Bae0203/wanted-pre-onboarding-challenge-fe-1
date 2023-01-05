import { useNavigate } from "react-router-dom";
import {
  HeaderSt,
  HeaderNav,
  HeaderTitle,
  HeaderP,
} from "../style/HeaderStyle";
import { isLogIn } from "../store/isLogInAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const Header = () => {
  let Navigate = useNavigate();
  let [reIsLogIn, setIsLogIn] = useRecoilState<boolean>(isLogIn);
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      setIsLogIn(true);
    }
  }, []);
  // let setIsLogIn = useSetRecoilState(isLogIn);
  // if (Token == null) {
  //   setIsLogIn(false);
  //   console.log("ff", isLogIn);
  // } else {
  //   setIsLogIn(true);
  //   console.log("tt", isLogIn);
  // }
  return (
    <HeaderSt>
      <HeaderTitle
        onClick={() => {
          Navigate("/");
        }}
      >
        Todo List
      </HeaderTitle>
      {/* <button
        onClick={() => {
          let a = Object.values(localStorage);
          console.log(a);
        }}
      >
        dd
      </button> */}
      <HeaderNav>
        {reIsLogIn ? (
          <HeaderP
            onClick={() => {
              let a: boolean = window.confirm("로그아웃 하시겠습니까?");
              if (a) {
                localStorage.clear();
                setIsLogIn(false);
              }
            }}
          >
            Logout
          </HeaderP>
        ) : (
          <HeaderP
            onClick={() => {
              Navigate("/auth");
            }}
          >
            SignIn
          </HeaderP>
        )}
      </HeaderNav>
    </HeaderSt>
  );
};

export default Header;
