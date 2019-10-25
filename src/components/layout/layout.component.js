import React, {useState} from 'react';
import {GlobalStyles} from './globalStyles';
import Heder from '../heder/heder.component';
import Footer from '../footer/footer.component';
import SEO from '../seo/seo.component';

import {getCurrentLangKey, getLangs, getUrlForLang} from 'ptz-i18n';
import {IntlProvider, addLocaleData} from 'react-intl';

import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import bg from 'react-intl/locale-data/bg';
import 'intl/locale-data/jsonp/bg';

addLocaleData([...en, ...bg]);

const TemplateWrapper = props => {
  const children = props.children;
  const location = props.location;
  const url = location.pathname;
  const {langs, defaultLangKey} = props.data.site.siteMetadata.languages;

  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const i18nMessages = require(`../../data/messages/${langKey}`);

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <SEO />
        <GlobalStyles />
        <Heder langs={langsMenu} />
        {children}
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;
