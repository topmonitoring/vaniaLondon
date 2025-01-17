import React from "react";
import styled from "styled-components";

const Burgermenu = props => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: block;

  & span {
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
    background-color: black;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -17px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 17px;
  }
`;
