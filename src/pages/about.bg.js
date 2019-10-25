import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const AboutPage = props => (
  <Layout data={props.data} location={props.location}>
    <div>
      <h1>Здравей</h1>
      <h3>Относно</h3>
    </div>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
