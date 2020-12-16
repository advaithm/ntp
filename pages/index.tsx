import { NextPageContext, GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"
import { getUnsplash } from '../src/get-unsplash';
import { log } from '../tools/log';

import localForage from 'localforage';

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  const [backgroundImage, setBackgroundImage] = React.useState<string | null>("")
  const [attributionData, setAttributionData] = React.useState<Attribution | null>({ p: "", l: "", lp: [0, 0], usn: "", n: "" })

  React.useEffect(() => {
    if(!background) {
      localForage.getItem<string>("wallpaper-cache")
        .then((cachedWallpaper) => {
          setBackgroundImage(cachedWallpaper)
        })
        .catch((e) => console.log(e))
      localForage.getItem<Attribution>("attribution-cache")
        .then((cachedAttribution) => {
          console.log(cachedAttribution)
          setAttributionData(cachedAttribution)
        })
        .catch((e) => console.log(e))
      return
    }

    log("CACHE_DRIVER", "Adding background to offline store...");

    localForage.setItem("wallpaper-cache", background);
    localForage.setItem("attribution-cache", attribution)
    document.cookie = "backgroundSet=true"
    setBackgroundImage(background)
    setAttributionData(attribution)
  }, [background])

  return (
    <Layout background={backgroundImage} attribution={attributionData}>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (ctx.req.cookies.backgroundSet) return { props: { background: "", attribution: {} }};
  const img = await getUnsplash() ?? { background: "", attribution: {} }
  return {
    props: {
      background: img.background,
      attribution: img.attribution
    }
  }
};

export default NTPPage;