import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavbarLinks = ({ isFooter }) => (
  <>
    <div>
      <StyledNavLink to={`/bg`}>Начало</StyledNavLink>
    </div>
    <div>
      <StyledNavLink to={`/bg/about`}>Портфолио</StyledNavLink>
    </div>
    <div>
      <StyledNavLink to={`/bg/contact`}>Контакти</StyledNavLink>
    </div>
    <div>
      <StyledNavLink to={`/bg/jewellery`}>Бижута</StyledNavLink>
    </div>
    <div>
      <StyledNavLink to={`/bg/bookasession`}>Запишете час</StyledNavLink>
    </div>
  </>
);

export default NavbarLinks;

const StyledNavLink = styled(Link)`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: auto;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: aqua;
    border-bottom: 1px solid aqua;
  }
`;
