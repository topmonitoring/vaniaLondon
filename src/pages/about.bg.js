import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import About from "../components/about/about";
import YoutubeGrid from "../components/youtubeGrid/youtubeGrid";
import CallToAction from "../components/buttons/callToAction";
import SocialMediaLinks from "../components/social-links/social-links.component";

const AboutPage = props => {
  const node = props.data.page.edges[0].node;

  return (
    <Layout data={props.data} location={props.location}>
      <About node={node} />
      <CallToAction>Ваня в соцялните медий</CallToAction>
      <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
      <SocialMediaLinks />
      <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
      <YoutubeGrid />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutBGQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }

    page: allContentfulAboutPage(filter: { node_locale: { eq: "bg-BG" } }) {
      edges {
        node {
          personName
          personPicture {
            fluid(maxWidth: 600, maxHeight: 333, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
          }
          personAboutInfo {
            childMarkdownRemark {
              html
            }
          }
          personIntroYoutubeVideo {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulProduct(filter: { node_locale: { eq: "bg-BG" } }) {
      edges {
        node {
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
              ...GatsbyContentfulFluid
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
