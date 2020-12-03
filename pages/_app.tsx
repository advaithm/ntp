import React from 'react'
import Head from 'next/head'

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;