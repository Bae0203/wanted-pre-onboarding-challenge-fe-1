import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogIn } from "../store/isLogInAtom";
import {
  TodoNavBox,
  TodoContentInputBox,
  TodoContentBox,
  PleaseLoggin,
  TodoUl,
  TodoTitleInputBox,
} from "../style/TodoStyle";
import TodoContent from "./TodoContent";
import customAxios from "../hooks/customAxios";

// const Url: string = "http://localhost:8080";

// const PostTodo = async ({
//   content,
//   title,
// }: {
//   content: string;
//   title: string;
// }) => {
//   await axios
//     .post(Url + "/todos", {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       title: title,
//       content: content,
//     })
//     .then((e) => {
//       console.log(e);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

const TodoBox = () => {
  let isLogged = useRecoilValue(isLogIn);
  let [content, setContent] = useState<string>("");
  let [title, setTitle] = useState<string>("");
  return (
    <TodoNavBox>
      {isLogged ? (
        <TodoContentBox>
          <TodoTitleInputBox
            type={"text"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder={"제목을 적어주세요."}
          />
          <TodoContentInputBox
            value={content}
            type={"text"}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder={"내용을 적어주세요."}
          />
          <button
            onClick={() => {
              if (content == "" || title == "") {
                alert("내용을 제대로 입력해주세요");
              } else {
                let addCh: boolean = window.confirm(
                  title + "\n" + content + "를 할 일에 추가하시겠습니까??"
                );
                console.log(addCh, localStorage.getItem("loginToken"));
                customAxios.post("/todos", {
                  title: title,
                  content: content,
                });
              }
            }}
          >
            추가
          </button>
          <h3>Todo List</h3>
          <TodoUl>
            <TodoContent></TodoContent>
            <TodoContent></TodoContent>
            <TodoContent></TodoContent>
          </TodoUl>
        </TodoContentBox>
      ) : (
        <PleaseLoggin>로그인 해주세요</PleaseLoggin>
      )}
    </TodoNavBox>
  );
};

export default TodoBox;
