import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  gap: 5px;
`;
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Block = styled.div<{ color: string }>`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;
