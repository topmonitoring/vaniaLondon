import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import FormComponent from "../components/contact-form/contact-form.component";
import CallToAction from "../components/buttons/callToAction";
import ContactDetails from "../components/social-links/social-contact-details";

const ContactPage = props => (
  <Layout data={props.data} location={props.location}>
    <CallToAction>Contact Vanya</CallToAction>
    <div style={{ textAlign: "center" }}>
      Please reach out to Vanya for any session enquiries
    </div>
    <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
    <ContactDetails />
    <hr style={{ width: "80vw", fontWeight: "800", color: "black" }} />
    <div style={{ textAlign: "center" }}>or just fill the form below...</div>
    <FormComponent />
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
