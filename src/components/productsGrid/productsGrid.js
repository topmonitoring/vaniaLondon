import React from "react";
import { StyledProductsGrid } from "./ProductsGrid.styles";
import Img from "gatsby-image";

const BackgroundSection = ({ edges }) => {
  return (
    <StyledProductsGrid>
      {edges.map(({ node }) => (
        <div key={node.productName}>
          <Img fluid={node.productImage[0].fluid} />
          <div
            dangerouslySetInnerHTML={{
              __html: node.productDescription.childMarkdownRemark.html
            }}
          />
          <h4>{node.productName}</h4>
        </div>
      ))}
    </StyledProductsGrid>
  );
};

export default BackgroundSection;
