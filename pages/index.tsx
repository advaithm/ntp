import { NextPageContext, GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"
import { getUnsplash } from '../src/get-unsplash';
import { log } from '../tools/log';

import localForage from 'localforage';

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  const [backgroundImage, setBackgroundImage] = React.useState<string>("")
  const [attributionData, setAttributionData] = React.useState<Attribution>({ p: "", l: "", lp: [0, 0], usn: "", n: "" })

  React.useEffect(() => {
    if(!background) {
      localForage.getItem<string>("wallpaper-cache")
        .then((cachedWallpaper) => {
          setBackgroundImage(cachedWallpaper ?? "")
        })
        .catch((e) => console.log(e))
      localForage.getItem<Attribution>("attribution-cache")
        .then((cachedAttribution) => {
          setAttributionData(cachedAttribution ?? { p: "", l: "", lp: [0, 0], usn: "", n: "" })
        })
        .catch((e) => console.log(e))
      return
    }

    log("CACHE_DRIVER", "Adding background to offline store...");

    localForage.setItem("wallpaper-cache", background);
    localForage.setItem("attribution-cache", attribution)

    const date = new Date()
    date.setTime(date.getTime()+(5*60*1000));
    document.cookie = "backgroundSet=true; expires=" + date.toUTCString()
    
    setBackgroundImage(background)
    setAttributionData(attribution)
  }, [background])

  return (
    <Layout background={backgroundImage} attribution={attributionData}>
    </Layout>
  )
}

export const getServerSideProps = async (ctx: any) => {
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