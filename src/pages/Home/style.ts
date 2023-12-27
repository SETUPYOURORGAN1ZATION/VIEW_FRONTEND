import styled from "styled-components";
import font from "styles/font";

export const Layout = styled.div`
  overflow: hidden;
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  ${font.H3}
  margin-bottom: 20px;
`;
