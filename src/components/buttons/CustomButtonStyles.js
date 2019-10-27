import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedButton = styled(animated.button)`
  margin: auto;
  background: #34b3a0;
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 1rem 2rem;
  text-decoration: none;
  width: 250px;

  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: aqua;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 16px;
    &:hover {
      width: 85%;
    }
  }
`;
