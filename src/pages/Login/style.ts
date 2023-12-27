import styled from "styled-components";
import font from "styles/font";

export const Container = styled.div`
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 30vw;
  height: 70vh;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;
`;

export const LoginTitle = styled.h1`
  ${font.H1};
  color: #0085ff;
`;

export const LoginInput = styled.input`
  width: 310px;
  height: fit-content;
  padding: 10px 15px;
  ${font.p2};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
`;

export const LoginInputTitle = styled.span`
  ${font.p2};
  margin-right: auto;
`;

export const LoginInputBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const LoginButton = styled.button`
  width: 320px;
  height: 46px;
  background-color: #0085ff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  ${font.p2};
`;

export const SignupText = styled.span`
  ${font.p3};
  color: #aaa;
  span {
    cursor: pointer;
    color: #0085ff;
  }
`;
