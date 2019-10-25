import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const AboutPage = props => (
  <Layout data={props.data} location={props.location}>
    <div>
      <h1>Hi</h1>
      <h3>About PAge</h3>
    </div>
  </Layout>
);

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
  }
`;
