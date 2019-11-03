import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout.component";

import {
  StyledContainer,
  StyledImg,
  StyledBuyNowButton,
  StyledTitle,
  StyledDiscription,
  StyledAwesomeSlider,
  StyledPurchaseInfo
} from "./product.styles";

const Product = props => {
  const productName = props.data.contentfulProduct.productName;
  const productImages = props.data.contentfulProduct.productImage;
  const locale = props.data.contentfulProduct.node_locale;
  return (
    <Layout data={props.data} location={props.location}>
      <StyledContainer>
        <StyledTitle>{productName}</StyledTitle>
        <StyledAwesomeSlider style={{ width: "900px", zIndex: "0" }}>
          {productImages.map(image => (
            <div key={image.id}>
              <StyledImg fluid={image.fluid} />
            </div>
          ))}
        </StyledAwesomeSlider>

        <StyledDiscription
          dangerouslySetInnerHTML={{
            __html:
              props.data.contentfulProduct.productDescription
                .childMarkdownRemark.html
          }}
        />
        {locale === "en-US" ? (
          <StyledPurchaseInfo>
            Please select below the type of blessing you require on the
            Jewellery In Details, please put Date of Birth, Country and
            City/Town of Your Birth
          </StyledPurchaseInfo>
        ) : (
          <StyledPurchaseInfo>
            Моля изберете вида на благословията, която ви е необходима в
            ​​подробности, моля, въведете дата на раждане, държава и града в
            който сте роден/а.
          </StyledPurchaseInfo>
        )}

        <StyledBuyNowButton
          dangerouslySetInnerHTML={{
            __html:
              props.data.contentfulProduct.productBuyNowButton
                .childMarkdownRemark.html
          }}
        />
      </StyledContainer>
    </Layout>
  );
};

export default Product;

export const pageQuery = graphql`
  query productQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    contentfulProduct(id: { eq: $id }) {
      node_locale
      productName
      productImage {
        fluid(maxWidth: 600, maxHeight: 400, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      productDescription {
        childMarkdownRemark {
          html
        }
      }
      productBuyNowButton {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
