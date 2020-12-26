import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"
import { getUnsplash } from '../src/get-unsplash';
import { log } from '../tools/log';

import localForage from 'localforage';

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  return (
    <Layout background={background} attribution={attribution}>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const img = await getUnsplash() ?? { background: "", attribution: {} }
  return {
    props: {
      background: img.background,
      attribution: img.attribution
    },
    revalidate: 300
  }
};

export default NTPPage;