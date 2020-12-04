import { NextPageContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { getFreshBackgrounds } from '../plugins/unsplash/background';

const NTPPage = ({ background }: { background: string }) => {
  return (
    <Layout background={background}>
    </Layout>
  )
}

NTPPage.getInitialProps = async (ctx: NextPageContext) => {
  const { data: image } = await axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, { headers: {
    authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
  }})

  return { background: image.urls.raw + "&w=1920" }
};

export default NTPPage;