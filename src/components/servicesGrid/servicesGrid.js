import React from "react";
import {
  StyledProductsGrid,
  StyledService,
  StyledTitle,
  StyledDetails,
  StyledButton,
  Styledinfo
} from "./servicesGrid.styles";

const BackgroundSection = ({ edges }) => {
  return (
    <StyledProductsGrid>
      {edges.map(({ node }) => (
        <StyledService key={node.serviceTitle}>
          <Styledinfo>
            <StyledTitle>{node.serviceTitle}</StyledTitle>
            <StyledDetails
              dangerouslySetInnerHTML={{
                __html: node.serviceDetails.childMarkdownRemark.html
              }}
            />
          </Styledinfo>
          <StyledButton
            dangerouslySetInnerHTML={{
              __html: node.serviceBuyNowButton.childMarkdownRemark.html
            }}
          />
        </StyledService>
      ))}
    </StyledProductsGrid>
  );
};

export default BackgroundSection;
