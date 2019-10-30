import styled from "styled-components";
import { Link } from "gatsby";

export const StyledProductsGrid = styled.div`
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-areas: "product product product";
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  padding: 50px;
  align-content: center;
  @media screen and (max-width: 800px) {
    grid-template-areas: "product ";
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 20px;
    h2 {
      font-size: 15px;
    }
  }
`;

export const StyledProduct = styled(Link)`
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 10px 11px 21px -5px grey;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 800px) {
  }
`;
export const StyledTitle = styled.h4`
  position: absolute;
  z-index: 200;
  text-align: center;
  margin: auto;
  background-color: grey;
  padding: 5px;
  border-radius: 5px;
  opacity: 0.7;
`;
