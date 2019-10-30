import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: allFile(filter: { name: { eq: "clouds-cornfield-farm-158827" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.bgr.edges[0].node.childImageSharp.fluid;
      return (
        <BackgroundImage className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 60vh;
  position: absolute;
  left: 0px;
  top: -75px;
  background-repeat: no-repeat;
  margin-bottom: -75px;
`;
export default StyledBackgroundSection;
