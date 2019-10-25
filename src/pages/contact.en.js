import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';
import FormComponent from '../components/contact-form/contact-form.component';

const ContactPage = props => (
  <Layout data={props.data} location={props.location}>
    <FormComponent />
    <div>
      <h1>Hi</h1>
      <h3>Contact Page</h3>
    </div>
  </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
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
