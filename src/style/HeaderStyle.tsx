import styled from "styled-components";

export const HeaderSt = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.4);
`;

export const HeaderNav = styled.span`
  display: flex;
  margin-left: auto;
  margin-right: 15rem;
  &:hover {
    color: gray;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.4rem;
  margin: auto 0;
  margin-left: 15rem;
  &:hover {
    color: gray;
  }
`;

export const HeaderP = styled.p`
  font-size: 1rem;
  margin: auto 0;
  margin-right: 2rem;
`;
