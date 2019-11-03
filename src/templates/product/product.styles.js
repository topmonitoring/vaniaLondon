import styled from "styled-components";
import Img from "gatsby-image";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const StyledAwesomeSlider = styled(AwesomeSlider)`
  margin: auto;
  width: 600px;
  height: 400px;
  z-index: 10;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    width: 80vw;
    height: 300px;
  }
`;

export const StyledContainer = styled.div`
  width: 70vw;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: rgb(230, 242, 242);
  margin: 50px auto;
  border-radius: 20px;
  padding: 10px;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;
export const StyledImg = styled(Img)`
  margin: auto;
  width: 600px;
  height: 400px;
  @media screen and (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;
export const StyledBuyNowButton = styled.div`
  margin: auto;
  table {
    input {
      width: 30vw;
    }
  }
  select {
    width: 30vw;
  }
  @media screen and (max-width: 800px) {
    table {
      input {
        width: 80vw;
      }
    }
    select {
      width: 80vw;
    }
  }
`;
export const StyledTitle = styled.h1`
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;
export const StyledDiscription = styled.div`
  padding: 20px;
`;

export const StyledPurchaseInfo = styled.div`
  color: red;
  margin: auto;
  font-weight: 800;
  font-size: 18px;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const StyledPurchaseShiping = styled.div`
  color: blue;
  margin: auto;
  font-weight: 800;
  font-size: 18px;
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;
