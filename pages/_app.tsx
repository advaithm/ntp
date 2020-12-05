import React from 'react'
import Head from 'next/head'
import NTPPage from '.';

import '../components/index.css';

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>
      <NTPPage {...pageProps} />
    </>
  )
}

export default App;