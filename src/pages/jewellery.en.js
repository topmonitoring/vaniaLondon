import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import ProductsGrid from "../components/productsGrid/productsGrid";
import CallToAction from "../components/buttons/callToAction";
import JewlleryBgr from "../components/bagrounds/jewellery.baground";
import styled from "styled-components";

const JewlleryPage = props => {
  return (
    <Layout data={props.data} location={props.location}>
      <JewlleryBgr>
        <br />
        <br />
        <br />
        <CallToAction>Healing Jewllery By Vanya</CallToAction>
      </JewlleryBgr>

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
          node_locale
          slug
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
