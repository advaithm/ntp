import React from 'react'
import Head from 'next/head'
import { GlobalStyle } from '../components/style';

const App = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return (
    <>
      <Head>
        <title>New Tab</title>
        <style global jsx>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    background-color: black;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                }
            
                * {
                    box-sizing: border-box;
                }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;