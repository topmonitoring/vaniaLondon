import React from 'react';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';

const SelectLanguage = props => {
  const links = props.langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: 'white',
      }}
    >
      <li selected={lang.selected}>{lang.langKey}</li>
    </Link>
  ));

  return (
    <section>
      <header
        style={{
          color: 'white',
        }}
      >
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>{links}</ul>
    </section>
  );
};

export default SelectLanguage;
