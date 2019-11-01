import React from "react";
import { StyledDetails, StyledImg } from "./bookSessionDetails.styles";

const BackgroundSection = ({ node }) => {
  return (
    <>
      <StyledDetails
        dangerouslySetInnerHTML={{
          __html: node.bankDetails.childMarkdownRemark.html
        }}
      />
      <StyledImg fluid={node.paypalImage.fluid} />
      <div
        dangerouslySetInnerHTML={{
          __html: node.sessionScaduler.childMarkdownRemark.html
        }}
      />
    </>
  );
};

export default BackgroundSection;
