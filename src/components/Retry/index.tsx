import React from "react";
import retry from "../../assets/retry.svg";
import styled from "styled-components";

const Retry = () => {
  return <StyledContainer src={retry} />;
};

const StyledContainer = styled.img`
  width: 30px;
  height: 30px;
`;

export default Retry;
