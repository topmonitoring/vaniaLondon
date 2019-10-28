import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import NavbarLinks from "./navbar-links";
import SelectLanguage from "../select-langlage/select-langlege";

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Logo />
          <NavLinks style={linkAnimation}>
            <NavbarLinks />
          </NavLinks>
          <SelectLanguage langs={props.langs} />

          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  height: 75px;
  width: 100%;
  font-size: 1.2rem;
  background-color: grey;
  z-index: 1;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
const NavLinks = styled(animated.div)`
  justify-self: end;
  list-style-type: none;
  margin: auto;
  -moz-column-count: 5;
  -moz-column-gap: 20px;
  -webkit-column-count: 5;
  -webkit-column-gap: 20px;
  column-count: 5;
  column-gap: 20px;
  div {
    text-align: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
