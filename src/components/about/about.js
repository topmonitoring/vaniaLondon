import React from "react";
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledName,
  StyledTitle
} from "./about.styles";

const About = ({ node }) => (
  <>
    <StyledTitle>About Vania</StyledTitle>
    <StyledName>{node.personName}</StyledName>
    <StyledAboutSection>
      <StyledAboutInfo
        dangerouslySetInnerHTML={{
          __html: node.personAboutInfo.childMarkdownRemark.html
        }}
      />
      <StyledImg alt="person photo" fluid={node.personPicture.fluid} />
    </StyledAboutSection>
  </>
);

export default About;
