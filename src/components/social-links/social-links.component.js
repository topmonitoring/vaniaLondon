import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { SocialLinksContainer } from "./social-links.styles";

const SocialLinks = () => {
  return (
    <>
      <SocialLinksContainer>
        <SocialLink className="fab fa-facebook" />
        <SocialLink className="fab fa-twitter" />
        <SocialLink className="fab fa-instagram" />
        <SocialLink className="fab fa-linkedin" />
        <SocialLink className="fab fa-github" />
      </SocialLinksContainer>
    </>
  );
};

export default SocialLinks;

const SocialLink = ({ href, className }) => (
  <a
    href={`${href}`}
    rel="noreferrer noopener"
    target="_blank"
    aria-label="link to social media"
  >
    <i className={`${className}`} alt="social link" />
  </a>
);
