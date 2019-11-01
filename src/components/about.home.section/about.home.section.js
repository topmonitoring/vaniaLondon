import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  StyledAboutSection,
  StyledAboutInfo,
  StyledImg,
  StyledFiexedImg,
  StyledContainer,
  StyledEmptySpace
} from "./about.styles";
import CustomButton from "../buttons/CustomAnimatedButton";
import CallToAction from "../buttons/callToAction";

const About = ({ node }) => (
  <StaticQuery
    query={graphql`
      query {
        bgr: allFile(filter: { name: { eq: "bottombanner-1" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1500, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        second: allFile(filter: { name: { eq: "vanya-tv-appearance" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 333) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        third: allFile(filter: { name: { eq: "vanya-vianna-stibal" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 889, maxHeight: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        forth: allFile(filter: { name: { eq: "book_session" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1280, maxHeight: 564) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const bgr = data.bgr.edges[0].node.childImageSharp.fluid;
      const second = data.second.edges[0].node.childImageSharp.fluid;
      const third = data.third.edges[0].node.childImageSharp.fluid;
      const forth = data.forth.edges[0].node.childImageSharp.fluid;
      return (
        <>
          <StyledAboutSection>
            <StyledContainer>
              <StyledAboutInfo>
                Vanya is a natural healer in her own right. Her powers gifted
                from the spiritual world and recognized by Baba Vanga, the
                famous Eastern European mystic, have recently been further
                enhanced by the training she undertook on a number of courses
                taken to become qualified as a Theta Healing practitioner.
              </StyledAboutInfo>
              <StyledFiexedImg fluid={second} />
            </StyledContainer>
            <StyledContainer>
              <StyledFiexedImg fluid={third} />
              <StyledAboutInfo>
                When Vianna Stibal, the founder of Theta Healing, first met
                Vanya she remarked that she has been waiting years to finally
                meet her. There are a number of good practitioners successfully
                working throughout the world but few with the God given gifts of
                Vanya’s natural spiritual strength and healing. Theta Healing
                has further enhanced her powers to open up the subconscious mind
                and then to work on restoring positive energy, peace of mind and
                the healing of mind body and soul.
              </StyledAboutInfo>
            </StyledContainer>
            <StyledContainer>
              <StyledAboutInfo>
                This gracious gift from God allows Vanya to act as conduit
                between her patient and the higher power. This secure connection
                enriches the treatment ensuring maximum success.
              </StyledAboutInfo>
              <StyledFiexedImg fluid={forth} />
            </StyledContainer>
          </StyledAboutSection>
          <CustomButton to="/en/about">Learn more About Vanya</CustomButton>
          <br />
          <StyledImg fluid={bgr} />
        </>
      );
    }}
  />
);

export default About;
