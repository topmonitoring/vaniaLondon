import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import HomeCover from "../components/home-cover/home-cover";
import styled from "styled-components";
import CustomButton from "../components/buttons/CustomAnimatedButton";
import YoutubeGrid from "../components/youtubeGrid/youtubeGrid";
import CallToAction from "../components/buttons/callToAction";
import AboutHome from "../components/about.home.section/about.home.section";
import ProductsGrid from "../components/productsGrid/productsGrid";

const HomePage = props => {
  const about = props.data.allContentfulHomePage.edges[0].node.about.about;

  return (
    <Layout data={props.data} location={props.location}>
      <HomeCover>
        <StyledInfo>
          <h1>Madam Vanya</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: about
            }}
          />
          <br />
          <CustomButton>Book A Session</CustomButton>
        </StyledInfo>
      </HomeCover>
      <CallToAction bgr="grey">Theta Healing ®</CallToAction>
      <AboutHome />

      <CallToAction bgr="grey">Some of My Ameizing clients</CallToAction>
      <YoutubeGrid />
      <CallToAction>
        <CustomButton>Go to Testemonials</CustomButton>
      </CallToAction>
      <CallToAction bgr="grey">Vanya Healing Jewellery</CallToAction>

      <ProductsGrid edges={props.data.allContentfulProduct.edges} />
      <CallToAction>
        <CustomButton>Go to Jewellery page</CustomButton>
      </CallToAction>
    </Layout>
  );
};

export default HomePage;
export const pageQuery = graphql`
  query HomeQueryEN {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulHomePage(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          node_locale
          about {
            about
          }
        }
      }
    }
    allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          node_locale
          slug
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const StyledInfo = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 100px;
  right: 0;
  margin: auto;
  width: 60%;
  height: 60%;
  text-align: center;
  font-size: 20px;
  color: white;
  padding: 50px 0px;
  background-color: grey;
  opacity: 0.8;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    width: 90vw;
    height: 80vh;
    font-size: 16px;
  }
`;
