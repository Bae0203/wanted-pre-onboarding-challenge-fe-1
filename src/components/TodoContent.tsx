import axios from "axios";
import React from "react";
import customAxios from "../hooks/customAxios";
import { TodoLi, TodoContentSpan } from "../style/TodoContentStyle";

const TodoContent = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  return (
    <TodoLi>
      <TodoContentSpan
        onClick={() => {
          console.log(content);
        }}
      >
        {title}
      </TodoContentSpan>
      <button
        onClick={() => {
          let delCh: boolean = window.confirm(
            title + "\n" + content + "를 삭제 하시겠습니까?"
          );
          if (delCh) {
            customAxios
              .delete("/todos/" + id)
              .then((e) => {
                console.log(e);
              })
              .catch((e) => {
                console.log(e);
              });
          }
        }}
      >
        삭제
      </button>
    </TodoLi>
  );
};

export default TodoContent;
