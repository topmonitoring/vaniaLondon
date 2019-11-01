import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "gatsby";

export const AnimatedButton = styled(animated.div)`
  margin: auto;
  background: rgb(144, 186, 245);
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 1rem 2rem;
  text-decoration: none;
  width: 250px;
  text-align: center;

  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: rgb(129, 164, 214);
  }

  @media screen and (max-width: 800px) {
    width: 150px;
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
