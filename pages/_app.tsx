import React from 'react'
import Head from 'next/head'

import NTPPage from '.';

import '../components/index.css';

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
        <link rel="shortcut icon" href="about:blank" />
      </Head>
      <NTPPage {...pageProps} />
      {/* {typeof(window) !== "undefined" && window.location.pathname.startsWith("/settings") && <Settings />} */}
    </>
  )
}

export default App;