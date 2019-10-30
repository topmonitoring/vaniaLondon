import styled from "styled-components";
import Img from "gatsby-image";

export const StyledAboutSection = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;

  border-radius: 5px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
  }
`;
export const StyledEmptySpace = styled.div`
  width: 40px;
`;
export const StyledAboutInfo = styled.div`
  width: 50%;
  padding: 50px;
  font-size: 17px;
  h1 {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 5px;
    font-size: 14px;
  }
`;
export const StyledImg = styled(Img)`
  height: 500px;
  width: 100vw;
  margin: auto;
  @media screen and (max-width: 800px) {
    height: 250px;
    width: 90%;
  }
`;
export const StyledFiexedImg = styled(Img)`
  height: 300px;
  width: 600px;
  margin: auto;
  @media screen and (max-width: 800px) {
    height: 250px;
    width: 90%;
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const StyledName = styled.h3`
  text-align: center;
`;
export const StyledTitle = styled.h1`
  text-align: center;
`;
