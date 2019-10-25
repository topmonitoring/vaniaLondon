import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout.component";
import HomeCover from "../components/home-cover/home-cover";
import styled from "styled-components";
import CustomButton from "../components/buttons/CustomAnimatedButton";

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
          <CustomButton>Learn More</CustomButton>
        </StyledInfo>
      </HomeCover>
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
    allContentfulYoutubeVideo(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          embedCode {
            childMarkdownRemark {
              html
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
`;
