import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const JewlleryPage = props => (
  <Layout data={props.data} location={props.location}>
    <div>
      <h1>Hi</h1>
      <h3>Jewllery PAge</h3>
    </div>
  </Layout>
);

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
  }
`;
