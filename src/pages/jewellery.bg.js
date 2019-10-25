import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const JewlleryPage = props => (
  <Layout data={props.data} location={props.location}>
    <div>
      <h1>Здравей</h1>
      <h3>Бижута</h3>
    </div>
  </Layout>
);

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
  }
`;
