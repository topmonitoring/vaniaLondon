import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { SocialLinksContainer } from "./social-links.styles";

const SocialLinks = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulContactInfo {
          edges {
            node {
              facebookLink
              twitterLink
              instagramLink
              youTubeLink
              skypeName
              phoneNumbers
            }
          }
        }
      }
    `}
    render={data => {
      const links = data.allContentfulContactInfo.edges[0].node;
      return (
        <>
          <SocialLinksContainer>
            <SocialLink href={links.facebookLink} className="fab fa-facebook" />
            <SocialLink href={links.twitterLink} className="fab fa-twitter" />
            <SocialLink
              href={links.instagramLink}
              className="fab fa-instagram"
            />
            <SocialLink href={links.youTubeLink} className="fab fa-youtube" />
          </SocialLinksContainer>
        </>
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
