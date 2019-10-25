import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout/layout.component';
import FormComponent from '../components/contact-form/contact-form.component';

const ContactPage = props => (
  <Layout data={props.data} location={props.location}>
    <FormComponent />
    <div>
      <h1>Контакти</h1>
      <h3>Свържете се с мен</h3>
    </div>
  </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactBGQuery {
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
