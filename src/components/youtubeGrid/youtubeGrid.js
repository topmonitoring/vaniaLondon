import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { StyledYoutubeGrid, StyledYoutubeVideo } from "./youtubeGrid.styles";

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        video: allContentfulYoutubeVideo(
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              title
              code: embedCode {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const VIDEOS = data.video.edges;
      return (
        <StyledYoutubeGrid>
          {VIDEOS.map(({ node }) => (
            <div key={node.title} aria-label="youtube video">
              <div
                dangerouslySetInnerHTML={{
                  __html: node.code.childMarkdownRemark.html
                }}
              />
              <h4>{node.title}</h4>
            </div>
          ))}
        </StyledYoutubeGrid>
      );
    }}
  />
);

export default BackgroundSection;
