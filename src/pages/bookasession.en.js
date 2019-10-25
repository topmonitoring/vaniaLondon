import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';

const BookASessionPage = props => {
  const siteTitle = props.data.site.siteMetadata.title;
  const session =
    props.data.allContentfulBookSessionPage.nodes[0].sessionScaduler
      .childMarkdownRemark.html;
  console.log(props);
  return (
    <Layout data={props.data} location={props.location}>
      <div>
        <h1>Hi {siteTitle}</h1>
        <h3>Book A Session PAge </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: session,
          }}
        />
      </div>
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
    allContentfulBookSessionPage {
      nodes {
        sessionScaduler {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;