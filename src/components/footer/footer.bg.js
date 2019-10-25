import React from 'react';
import SocialMediaLinks from '../social-links/social-links.component';
//import { NavListFooter } from '../navigation/navigation.component'
import {
  StyledFooter,
  StyledFooterEnd,
  StyledFooterGrid,
  StyledFooterInfo,
  StyledFooterSocials,
} from './footer.styles';

import './footer.styles.js';
import NavbarLinks from '../navbar/navbar-links.bg';
const Footer = () => (
  <StyledFooter>
    <StyledFooterGrid>
      <StyledFooterInfo>
        <h3>Портфолио</h3>
        <span>Добре дошли в vanyalondon.com</span>
      </StyledFooterInfo>
      <StyledFooterSocials>
        <h3>Соцялни медий</h3>
        <SocialMediaLinks />
      </StyledFooterSocials>
      <div className="links">
        <h3>Страници</h3>
        <NavbarLinks isFooter={true} />
      </div>
    </StyledFooterGrid>
    <StyledFooterEnd>
      vanyalondon.com © {new Date().getFullYear()} Всички права запазени{' '}
    </StyledFooterEnd>
  </StyledFooter>
);

export default Footer;
