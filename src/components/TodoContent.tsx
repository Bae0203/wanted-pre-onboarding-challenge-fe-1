import axios from "axios";
import React, { useState } from "react";
import customAxios from "../hooks/customAxios";
import {
  TodoLi,
  TodoContentSpan,
  ContentDivBox,
  TodoTitleInputBox,
  TodoContentInputBox,
} from "../style/TodoContentStyle";

const TodoContent = ({
  title,
  content,
  id,
}: {
  title: string;
  content: string;
  id: string;
}) => {
  let [showContent, setShowContent] = useState<boolean>(false);
  let [changeTitle, setChangeTitle] = useState<string>("");
  let [changeContent, setChangeContent] = useState<string>("");
  return (
    <TodoLi>
      <TodoContentSpan
        onClick={() => {
          setShowContent(!showContent);
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
      {showContent ? (
        <>
          <ContentDivBox>
            {content}
            <div>
              <TodoTitleInputBox
                type="text"
                placeholder="제목 변경"
                value={changeTitle}
                onChange={(e) => {
                  setChangeTitle(e.target.value);
                }}
              />
              <TodoContentInputBox
                type="text"
                placeholder="내용 변경"
                value={changeContent}
                onChange={(e) => {
                  setChangeContent(e.target.value);
                }}
              />
              <button>수정</button>
            </div>
          </ContentDivBox>
        </>
      ) : null}
    </TodoLi>
  );
};

export default TodoContent;
