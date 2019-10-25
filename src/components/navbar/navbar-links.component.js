import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const NAV_ITEMS = ['About', 'Contact', 'Jewellery'];

const NavbarLinks = ({isFooter}) => (
  <>
    <div>
      <StyledNavLink to={`/`} key="home">
        Home
      </StyledNavLink>
    </div>
    {NAV_ITEMS.map(navItem => (
      <div key={navItem}>
        <StyledNavLink to={`en/${navItem.toLowerCase()}`}>
          {navItem}
        </StyledNavLink>
      </div>
    ))}
    <div>
      <StyledNavLink to={`/en/bookasession`} key="bookasession">
        Book A Session
      </StyledNavLink>
    </div>
  </>
);

export default NavbarLinks;

const StyledNavLink = styled(Link)`
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
