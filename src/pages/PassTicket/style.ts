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

export const PassTicketList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PassTicketListItem = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px 18px;
  display: flex;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 4px;
`;

export const PassTicketTitle = styled.h1`
  ${font.p1};
  font-weight: 500;
`;

export const PassTicketSubTitle = styled.span`
  ${font.p2};
  font-weight: 400;
  color: #adb5bd;
  display: flex;
`;

export const PassTicketButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

export const PassTicketAcceptButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const PassTicketDeclineButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #e54f5a;
`;
