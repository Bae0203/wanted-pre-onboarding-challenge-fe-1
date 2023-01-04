import { useState } from "react";
import { useSetRecoilState } from "recoil";
import TodoBox from "../components/TodoBox";
import { isLogIn } from "../store/isLogInAtom";
function App() {
  return (
    <>
      <TodoBox />
    </>
  );
}

export default App;
