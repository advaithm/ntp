import { NextPageContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"
import { getUnsplash } from '../src/get-unsplash';
import { log } from '../tools/log';

import localForage from 'localforage';

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  React.useEffect(() => {
    if(!background) return;

    log("CACHE_DRIVER", "Adding background to offline store...");

    localForage.setItem("wallpaper-cache", background);
  }, [background])

  return (
    <Layout background={background} attribution={attribution}>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const img = await getUnsplash() ?? { background: "", attribution: {} }
  return {
    revalidate: 60,
    props: {
      background: img.background,
      attribution: img.attribution
    }
  }
};

export default NTPPage;