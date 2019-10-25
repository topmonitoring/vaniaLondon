import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import About from "../components/about/about";

const AboutPage = props => {
  const node = props.data.page.edges[0].node;

  return (
    <Layout data={props.data} location={props.location}>
      <About node={node} />
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
            fluid(maxWidth: 1920, background: "rgb:000000") {
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
  }
`;
