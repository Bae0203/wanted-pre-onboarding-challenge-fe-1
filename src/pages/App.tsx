import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isLogIn } from "../store/isLogInAtom";

function App() {
  let Token = localStorage.getItem("loginToken");
  // let setIsLogIn = useSetRecoilState(isLogIn);
  // if (Token == null) {
  //   setIsLogIn(false);
  // } else {
  //   setIsLogIn(true);
  // }
  return (
    <>
      <div>Main</div>
    </>
  );
}

export default App;
