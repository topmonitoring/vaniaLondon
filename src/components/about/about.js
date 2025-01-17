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
    <StyledTitle>{node.personName}</StyledTitle>
    <StyledAboutSection>
      <div
        dangerouslySetInnerHTML={{
          __html: node.personIntroYoutubeVideo.childMarkdownRemark.html
        }}
      />
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
