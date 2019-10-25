import React from 'react';
import {Link} from 'gatsby';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const NotFoundPage = props => (
  <Layout data={props.data} location={props.location}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Go back to the <Link to="/">Homepage</Link> and try again!
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundQuery {
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
