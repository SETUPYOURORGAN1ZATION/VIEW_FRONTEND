import styled from "styled-components";
import font from "styles/font";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageTitle = styled.h1`
  ${font.H2};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RegisterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterListTitle = styled.h1`
  ${font.H3};
`;

export const RegisterListItem = styled.li<{ status: string }>`
  width: 24%;
  height: fit-content;
  margin: 16px 0;
  padding: 10px 18px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  border-right: 4px solid
    ${({ status }) => {
      switch (status) {
        case "ATTENDANCE":
          return "#0085FF";
        case "ABSENT":
          return "#E54F5A";
        case "TRUANCY":
          return "#FFE500";
        default:
          return "#aaa";
      }
    }};
  box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.08);
`;

export const RegisterListItemHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusCircle = styled.div<{ status: string }>`
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background-color: ${({ status }) => {
    switch (status) {
      case "ATTENDANCE":
        return "#0085FF";
      case "ABSENT":
        return "#E54F5A";
      case "TRUANCY":
        return "#FFE500";
      default:
        return "#aaa";
    }
  }};
`;

export const StatusTitle = styled.span`
  ${font.p2};
  color: #999;
`;

export const StatusUpdateButton = styled.span`
  ${font.context};
  font-size: 12px;
  color: #999;
  margin-left: auto;
  cursor: pointer;
`;

export const RegisterListItemContent = styled.span`
  ${font.H5};
  font-weight: 500;
`;

export const RegisterListItemDescription = styled.span`
  ${font.p3};
  color: #aaa;
`;

export const RegisterUpdateModal = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 100px;
  position: absolute;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const RegisterUpdateModalItem = styled.div`
  cursor: pointer;
  width: 90px;
  height: 100%;
  padding: 6px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.p3};
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #aaa;
  }
`;

export const RegisterListItemInputBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: green; */
`;

export const RegisterListItemInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  height: 22px;
`;

export const RegisterListItemInputButton = styled.button`
  width: 60px;
  height: 22px;
  ${font.p4};
  border: none;
  background-color: #0285ff;
  color: white;
  border-radius: 999px;
  cursor: pointer;
`;
