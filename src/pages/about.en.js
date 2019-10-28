import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import About from "../components/about/about";
import YoutubeGrid from "../components/youtubeGrid/youtubeGrid";
import CallToAction from "../components/buttons/callToAction";

const AboutPage = props => {
  const node = props.data.page.edges[0].node;

  return (
    <Layout data={props.data} location={props.location}>
      <About node={node} />
      <CallToAction bgr="grey">Vanya in the Media</CallToAction>
      <YoutubeGrid />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutENQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }

    page: allContentfulAboutPage(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          personName
          personPicture {
            fluid(maxWidth: 600, maxHeight: 333, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          personAboutInfo {
            childMarkdownRemark {
              html
            }
          }
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
