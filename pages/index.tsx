import { NextPageContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  return (
    <Layout background={background} attribution={attribution}>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const { data: image } = await axios.get(`https://api.unsplash.com/photos/random?collections=67042424&orientation=landscape`, { headers: {
    authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
  }})
  .catch((e) => {
    console.log(e)
  })

  const attribution: Attribution = {
    p: image.links.html,
    l: image.location.name, 
    lp: [
      image.location.position.latitude, 
      image.location.position.longitude
    ], 
    usn: image.user.username, 
    n: image.user.name 
  }

  return {
    props: { background: image.urls.raw + "&w=1920", attribution: attribution }
  }
};

export default NTPPage;