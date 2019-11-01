import styled from "styled-components";
import { Link } from "gatsby";

export const StyledProductsGrid = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-content: center;
  @media screen and (max-width: 800px) {
    width: 90vw;
    padding: 0px;
    margin: 0px;
  }
`;

export const StyledService = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;
  flex-direction: row;
  transition: all 0.4s ease-in-out;
  box-shadow: 10px 11px 21px -5px grey;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Styledinfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const StyledTitle = styled.h1`
  margin: 0px;
  text-align: start;
  padding: 0px 25px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
export const StyledDetails = styled.p`
  text-align: start;
  padding: 25px;
  font-size: 14px;
`;
export const StyledButton = styled.p`
  margin: auto;
  padding: 25px;
`;
