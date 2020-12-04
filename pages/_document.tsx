import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../components/style';

export default class MyDocument extends Document {
  public props: any = {
    styleTags: ""
  }

  static getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {    
    return (
      <Html>
        <Head>
          <link rel="icon" href="data:," />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
