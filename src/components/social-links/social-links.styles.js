import styled from "styled-components";

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 40px;
  justify-content: center;

  a {
    i {
      margin: 15px;
      transition: all 0.4s ease-in-out;
      :hover {
        color: rgb(46, 117, 217);
        transform: scale(1.5);
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    a {
      margin: auto;
    }
  }
`;

export const SocialLinksDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
  width: 20vw;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    width: 33vw;
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 60vw;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
