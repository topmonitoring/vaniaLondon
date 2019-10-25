import styled from "styled-components";
import Img from "gatsby-image";

export const StyledAboutSection = styled.div`
  width: 60%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: grey;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`;
export const StyledAboutInfo = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 50px;
  font-size: 18px;
  h1 {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 5px;
  }
`;
export const StyledImg = styled(Img)`
  height: 400px;
  width: 400px;
  margin: auto;
  @media screen and (max-width: 800px) {
    height: 250px;
    width: 90%;
  }
`;
export const StyledName = styled.h3`
  text-align: center;
`;
export const StyledTitle = styled.h1`
  text-align: center;
`;
