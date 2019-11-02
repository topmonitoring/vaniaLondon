import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import ProductsGrid from "../components/productsGrid/productsGrid";
import CallToAction from "../components/buttons/callToAction";
import JewlleryBgr from "../components/bagrounds/jewellery.baground";

const JewlleryPage = props => {
  return (
    <Layout data={props.data} location={props.location}>
      <JewlleryBgr>
        <br />
        <br />
        <br />
        <CallToAction>Бижута с лечебни сили направени от Ваня</CallToAction>
      </JewlleryBgr>

      <ProductsGrid edges={props.data.allContentfulProduct.edges} />
    </Layout>
  );
};

export default JewlleryPage;

export const pageQuery = graphql`
  query JewelleryBGQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulProduct(filter: { node_locale: { eq: "bg-BG" } }) {
      edges {
        node {
          node_locale
          slug
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
