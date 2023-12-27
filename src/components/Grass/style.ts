import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 2.5%;
  height: 100%;
  gap: 5px;
`;

export const Block = styled.div<{ color: string }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;
