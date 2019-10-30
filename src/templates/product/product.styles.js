import styled from "styled-components";
import Img from "gatsby-image";

export const StyledContainer = styled.div`
  width: 80vw;
  margin: auto;
  align-content: center;
  text-align: center;
  display: grid;
  grid-area: "title title" "img img " "discription buynow";
  div {
    margin: auto;
  }
`;
export const StyledImg = styled(Img)`
  margin: auto;
`;
