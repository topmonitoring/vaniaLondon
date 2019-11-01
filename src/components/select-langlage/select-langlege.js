import React from "react";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: auto;
  margin: auto;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  list-style-type: none;
  a {
    li {
      float: left;
      width: auto;
      list-style: outside none none;
      &:hover {
        color: rgb(46, 117, 217);
      }
    }
  }
`;

const SelectLanguage = props => {
  const links = props.langs.map(lang => (
    <StyledLink
      to={lang.link}
      key={lang.langKey}
      style={{
        color: "black"
      }}
    >
      <li selected={lang.selected}>{lang.langKey}</li>
    </StyledLink>
  ));

  return (
    <section
      style={{
        color: "black",
        fontSize: "16px"
      }}
    >
      <FormattedMessage id="selectLanguage" />

      <StyledUl>{links}</StyledUl>
    </section>
  );
};

export default SelectLanguage;
