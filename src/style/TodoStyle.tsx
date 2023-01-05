import styled from "styled-components";

export const TodoNavBox = styled.nav`
  margin: 3rem auto;
  width: 50%;
  height: 700px;
  border-radius: 5%;
  box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.4);
`;

export const TodoContentInputBox = styled.input`
  width: 50%;
  padding: 5px;
  margin-right: 10px;
`;
export const TodoTitleInputBox = styled.input`
  margin: 40px auto;
  margin-right: 10px;
  padding: 5px;
`;

export const TodoContentBox = styled.div`
  width: 80%;
  height: 500px;
  margin: 40px auto;
`;

export const PleaseLoggin = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 30%;
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
`;

export const GoLoggin = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 3%;
  font-size: 1.5rem;
  text-align: center;
  &:hover {
    color: gray;
  }
`;

export const TodoUl = styled.ul`
    width: 100%;
    margin : 0 auto;
    height 500px;
    overflow:auto;
`;
