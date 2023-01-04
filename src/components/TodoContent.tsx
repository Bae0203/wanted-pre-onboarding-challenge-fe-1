import axios from "axios";
import React from "react";
import { TodoLi, TodoContentSpan } from "../style/TodoContentStyle";

const TodoContent = () => {
  return (
    <TodoLi>
      <TodoContentSpan
        onClick={() => {
          console.log("응 아잇어");

          //   axios
          //     .get( + "/todos")
          //     .then((e) => {
          //       console.log("성공 : ", e);
          //     })
          //     .catch((e) => {
          //       console.log(e);
          //     });
        }}
      >
        Title
      </TodoContentSpan>
    </TodoLi>
  );
};

export default TodoContent;
