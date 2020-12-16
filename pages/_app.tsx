import React from 'react'
import Head from 'next/head'

import NTPPage from '.';

import { Settings } from '../widgets/Settings';

import '../components/index.css';

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>
      <NTPPage {...pageProps} />
      {typeof(window) !== "undefined" && window.location.pathname.startsWith("/settings") && <Settings />}
    </>
  )
}

export default App;