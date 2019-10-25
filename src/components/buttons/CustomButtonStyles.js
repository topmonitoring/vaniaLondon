import styled from 'styled-components';
import {animated} from 'react-spring';

export const AnimatedButton = styled(animated.button)`
  background: #34b3a0;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  text-decoration: none;
  width: 30%;
  margin: auto;
  transition: width 2s;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    width: 35%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 16px;
    &:hover {
      width: 85%;
    }
  }
`;
