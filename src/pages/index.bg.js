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
          <h1>{props.data.allContentfulHomePage.edges[0].node.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: about
            }}
          />
          <br />

          <CustomButton to="/bg/bookasession">Запази си час</CustomButton>
        </StyledInfo>
      </HomeCover>
      <CallToAction bgr=" rgb(230, 242, 242);">Theta Healing ®</CallToAction>
      <AboutHome />

      <CallToAction bgr=" rgb(230, 242, 242);">Клиенти</CallToAction>
      <YoutubeGrid />
      <CallToAction>
        <CustomButton to="/bg/bookasession">Запази си час</CustomButton>
      </CallToAction>
      <CallToAction bgr=" rgb(230, 242, 242);">
        Лековити бижута от Ваня
      </CallToAction>

      <ProductsGrid edges={props.data.allContentfulProduct.edges} />
      <CallToAction>
        <CustomButton to="/bg/jewellery">Още бижута</CustomButton>
      </CallToAction>
    </Layout>
  );
};

export default HomePage;
export const pageQuery = graphql`
  query HomeQueryBG {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allContentfulHomePage(filter: { node_locale: { eq: "bg-BG" } }) {
      edges {
        node {
          title
          node_locale
          about {
            about
          }
        }
      }
    }
    allContentfulProduct(filter: { node_locale: { eq: "bg-BG" } }, limit: 3) {
      edges {
        node {
          node_locale
          slug
          productName
          productImage {
            fluid(maxWidth: 600, maxHeight: 600, background: "rgb:000000") {
              ...GatsbyContentfulFluid
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
  color: black;
  padding: 50px 0px;
  background-color: rgb(230, 242, 242);
  opacity: 0.8;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    width: 90vw;
    height: 80vh;
    font-size: 16px;
  }
`;
