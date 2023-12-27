import styled from "styled-components";
import { Link } from "react-router-dom";
import font from "styles/font";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 12vw;
  border-bottom: 1px solid #f2f3f7;
`;

export const Logo = styled(Link)`
  ${font.H1}
  color: #0085FF;
  text-decoration: none;
`;

export const FrontLayout = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 70px;
`;

export const Route = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const BackLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`;
