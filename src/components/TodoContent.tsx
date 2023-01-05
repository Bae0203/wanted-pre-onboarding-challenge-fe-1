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
            setShowContent(false);
            customAxios
              .delete("/todos/" + id)
              .then((e) => {
                alert("삭제되었습니다.");
              })
              .catch((e) => {});
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
              <button
                onClick={() => {
                  let ChangeCh: boolean = window.confirm(
                    changeTitle + "\n" + changeContent + "로 수정 하시겠습니까?"
                  );
                  if (ChangeCh) {
                    if (changeContent != "" && changeTitle != "") {
                      customAxios
                        .put("/todos/" + id, {
                          title: changeTitle,
                          content: changeContent,
                        })
                        .then((e) => {
                          alert("수정되었습니다!");
                        })
                        .catch((e) => {});
                      setChangeContent("");
                      setChangeTitle("");
                    } else if (changeContent != "" && changeTitle == "") {
                      customAxios
                        .put("/todos/" + id, {
                          title: title,
                          content: changeContent,
                        })
                        .then((e) => {
                          alert("수정되었습니다!");
                        })
                        .catch((e) => {});
                      setChangeContent("");
                      setChangeTitle("");
                    } else if (changeContent == "" && changeTitle != "") {
                      customAxios
                        .put("/todos/" + id, {
                          title: changeTitle,
                          content: content,
                        })
                        .then((e) => {
                          alert("수정되었습니다!");
                        })
                        .catch((e) => {});
                      setChangeContent("");
                      setChangeTitle("");
                    } else {
                      alert("정보를 제대로 입력해주세요");
                    }
                  }
                }}
              >
                수정
              </button>
            </div>
          </ContentDivBox>
        </>
      ) : null}
    </TodoLi>
  );
};

export default TodoContent;
