import styled from "styled-components";

export const StyledProductsGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-areas: "product product ";
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 20px 20vw 20px;
  align-content: center;
  @media screen and (max-width: 800px) {
    grid-template-areas: "video ";
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 20px;
    h2 {
      font-size: 15px;
    }
  }
`;
