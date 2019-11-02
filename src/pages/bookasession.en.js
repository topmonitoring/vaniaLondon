import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import ServicesGrid from "../components/servicesGrid/servicesGrid";
import JewlleryBgr from "../components/bagrounds/jewellery.baground";
import BookSessionDetails from "../components/bookSessionDetails/bookSessionDetails";

const BookASessionPage = props => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout data={props.data} location={props.location}>
      <JewlleryBgr />
      <ServicesGrid edges={props.data.allContentfulService.edges} />
      <BookSessionDetails
        node={props.data.allContentfulBookSessionPage.nodes[0]}
      />
    </Layout>
  );
};

export default BookASessionPage;

export const pageQuery = graphql`
  query BookASessionENQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulBookSessionPage(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        bankDetails {
          childMarkdownRemark {
            html
          }
        }
        paypalImage {
          fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
            ...GatsbyContentfulFluid
          }
        }
        sessionScaduler {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulService(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          serviceTitle
          serviceDetails {
            childMarkdownRemark {
              html
            }
          }
          serviceBuyNowButton {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
