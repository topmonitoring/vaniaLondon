import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { SocialLinksDetails, SocialContainer } from "./social-links.styles";

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulContactInfo {
          edges {
            node {
              skypeName
              phoneNumbers
              emailName
            }
          }
        }
      }
    `}
    render={data => {
      const links = data.allContentfulContactInfo.edges[0].node;
      console.log(links.phoneNumbers);
      return (
        <SocialContainer>
          <SocialLinksDetails>
            <SocialLink className="fas fa-phone" />
            {links.phoneNumbers[0]}
            {","}
            <SocialLinksDetails>{links.phoneNumbers[1]}</SocialLinksDetails>
          </SocialLinksDetails>
          <SocialLinksDetails>
            <SocialLink className="fab fa-skype" />
            {links.skypeName}
          </SocialLinksDetails>
          <SocialLinksDetails>
            <SocialLink className="far fa-envelope" />
            {links.emailName}
          </SocialLinksDetails>
        </SocialContainer>
      );
    }}
  />
);
export default SocialLinks;

const SocialLink = ({ href, className, alt }) => (
  <a
    href={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    aria-label="link to social media"
  >
    <i className={`${className}`} alt="social link" />
  </a>
);
