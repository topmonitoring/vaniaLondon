import React from "react";
import { StyledProductsGrid } from "./ProductsGrid.styles";
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
        <Link to={locale + "/" + node.slug} key={node.productName}>
          <h4>{node.productName}</h4>
          <Img fluid={node.productImage[0].fluid} />
        </Link>
      ))}
    </StyledProductsGrid>
  );
};

export default BackgroundSection;
