import styled from "styled-components";
import font from "styles/font";

export const Container = styled.div`
  padding: 2px 10px;
  padding-left: 14px;
  width: fit-content;
  border: 1.5px solid #ccc;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  position: relative;
`;

export const Title = styled.div`
  ${font.p3};
  color: #aaa;
  font-weight: 500;
`;

export const List = styled.ul<{ isClicked: boolean }>`
  width: 100px;
  top: 40px;
  position: absolute;
  display: ${({ isClicked }) => (isClicked ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  background-color: white;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 12px 18px;
  color: #777;
  font-weight: 500;
  &:hover {
    background-color: #eee;
  }
`;
