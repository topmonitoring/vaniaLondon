import React from "react";
import SocialMediaLinks from "../social-links/social-links.component";
//import { NavListFooter } from '../navigation/navigation.component'
import {
  StyledFooter,
  StyledFooterEnd,
  StyledFooterGrid,
  StyledFooterInfo,
  StyledFooterSocials
} from "./footer.styles";

import "./footer.styles.js";
import NavbarLinks from "../navbar/navbar-links";
const Footer = () => (
  <StyledFooter>
    <StyledFooterGrid>
      <StyledFooterInfo>
        <h3>ABOUT</h3>
        <span>Welcome to vanyalondon.com</span>
      </StyledFooterInfo>
      <StyledFooterSocials>
        <h3>SOCIAL MEDIA</h3>
        <SocialMediaLinks />
      </StyledFooterSocials>
      <div className="links">
        <h3>PAGES</h3>
        <NavbarLinks isFooter={true} />
      </div>
    </StyledFooterGrid>
    <StyledFooterEnd>
      vanyalondon.com © {new Date().getFullYear()} All rights reserved{" "}
    </StyledFooterEnd>
  </StyledFooter>
);

export default Footer;
