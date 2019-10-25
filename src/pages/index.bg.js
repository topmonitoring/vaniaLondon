import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';
import Img from 'gatsby-image';

const HomePage = props => {
  const about = props.data.allContentfulHomePage.edges[0].node.about.about;
  const fluid = props.data.allContentfulHomePage.edges[0].node.photo.fluid;

  //Create page with locale bg-BG
  return (
    <Layout data={props.data} location={props.location}>
      <div>
        <Img style={{width: '100%', heigth: '80vh'}} fluid={fluid} />
        <h1>Моето име е</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: about,
          }}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
export const pageQuery = graphql`
  query HomeQueryBG {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulHomePage(filter: {node_locale: {eq: "bg-BG"}}) {
      edges {
        node {
          node_locale
          photo {
            fluid(maxWidth: 1920, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          about {
            about
          }
        }
      }
    }
  }
`;
