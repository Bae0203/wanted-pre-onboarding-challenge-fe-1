import axios from "axios";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { isLogIn, loginToken } from "../store/isLogInAtom";
import {
  TodoNavBox,
  TodoContentInputBox,
  TodoContentBox,
  PleaseLoggin,
  TodoUl,
  TodoTitleInputBox,
} from "../style/TodoStyle";
import TodoContent from "./TodoContent";

const Url: string = "http://localhost:8080";

const PostTodo = async ({
  content,
  title,
}: {
  content: string;
  title: string;
}) => {
  await axios
    .post(Url + "/todos", {
      title: title,
      content: content,
      headers: { Authorization: localStorage.getItem("loginToken") },
    })
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
};

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
                PostTodo({ content, title });
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
