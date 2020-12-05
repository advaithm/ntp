import { NextPageContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { getFreshBackgrounds } from '../plugins/unsplash/background';

const NTPPage = ({ background, attribution }: { background: string }) => {
  return (
    <Layout background={background} attribution={attribution}>
    </Layout>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const { data: image } = await axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, { headers: {
    authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
  }})

  const attribution = {
    l: image.location.name, 
    lp: [
      image.location.position.latitude, 
      image.location.position.longitude
    ], 
    usn: image.user.username, 
    n: image.user.name 
  }

  console.log({ background: image.urls.raw + "&w=1920", attribution: attribution })

  return {
    props: { background: image.urls.raw + "&w=1920", attribution: attribution }
  }
};

export default NTPPage;