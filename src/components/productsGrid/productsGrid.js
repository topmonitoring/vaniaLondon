import React from "react";
import {
  StyledProductsGrid,
  StyledProduct,
  StyledTitle
} from "./ProductsGrid.styles";
import Img from "gatsby-image";
import { Link } from "gatsby";

const BackgroundSection = ({ edges }) => {
  var locale = "";
  if (edges[0].node.node_locale === "en-US") {
    locale = "en";
  } else {
    locale = "bg";
  }
  return (
    <StyledProductsGrid>
      {edges.map(({ node }) => (
        <StyledProduct to={locale + "/" + node.slug} key={node.productName}>
          {/*<StyledTitle>{node.productName}</StyledTitle>*/}
          <Img fluid={node.productImage[0].fluid} />
        </StyledProduct>
      ))}
    </StyledProductsGrid>
  );
};

export default BackgroundSection;
