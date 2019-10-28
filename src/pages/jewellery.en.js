import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import ProductsGrid from "../components/productsGrid/productsGrid";

const JewlleryPage = props => {
  return (
    <Layout data={props.data} location={props.location}>
      <h3>Jewllery PAge</h3>
      <ProductsGrid edges={props.data.allContentfulProduct.edges} />
    </Layout>
  );
};

export default JewlleryPage;

export const pageQuery = graphql`
  query JewelleryQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
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
    }
  }
`;
