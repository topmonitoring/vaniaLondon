import React from "react";
import styled from "styled-components";

const Baground = ({ children, bgr }) => {
  return <StyledBaground bgr={bgr}>{children}</StyledBaground>;
};

export default Baground;

export const StyledBaground = styled.h1`
  margin: 0px;
  height: 40px;
  background: ${props => props.bgr};
  color: white;
  font-weight: 600;
  padding: 2rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
