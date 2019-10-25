import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: allContentfulHomePage(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              node_locale
              photo {
                fluid(maxWidth: 1920, background: "rgb:000000") {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              about {
                about
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgr.edges[0].node.photo.fluid;
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;