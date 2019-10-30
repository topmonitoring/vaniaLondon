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
        color: aqua;
        transform: scale(1.5);
      }
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
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 60vw;
`;
