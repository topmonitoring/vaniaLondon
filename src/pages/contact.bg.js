import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import FormComponent from "../components/contact-form/contact-form.component";
import CallToAction from "../components/buttons/callToAction";
import ContactDetails from "../components/social-links/social-contact-details";

const ContactPage = props => (
  <Layout data={props.data} location={props.location}>
    <CallToAction>Свържете се с Ваня</CallToAction>
    <div style={{ textAlign: "center" }}>
      Моля, свържете се с Ваня ако имате други запитвания
    </div>
    <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
    <ContactDetails />
    <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
    <div style={{ textAlign: "center" }}>
      Или просто попълнете формата по-долу...
    </div>
    <FormComponent />
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
