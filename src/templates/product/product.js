import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/layout/layout.component";
import { StyledContainer, StyledImg } from "./product.styles";

const Product = props => {
  const productName = props.data.contentfulProduct.productName;

  return (
    <Layout data={props.data} location={props.location}>
      <StyledContainer>
        <h1>{productName}</h1>
        <StyledImg
          fluid={props.data.contentfulProduct.productImage[0].fluid}
          style={{ width: "600px", height: "400px" }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html:
              props.data.contentfulProduct.productDescription
                .childMarkdownRemark.html
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html:
              props.data.contentfulProduct.productBuyNowButton
                .childMarkdownRemark.html
          }}
        />
      </StyledContainer>
    </Layout>
  );
};

export default Product;

export const pageQuery = graphql`
  query productQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulProduct(id: { eq: $id }) {
      productName
      productImage {
        fluid(maxWidth: 600, maxHeight: 400, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      productBuyNowButton {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
