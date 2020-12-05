import { NextPageContext } from 'next';
import React from 'react';
import Layout from '../components/layout'
import axios from 'axios'

import { Attribution } from "../components/types"
import { getUnsplash } from '../src/get-unsplash';

const NTPPage = ({ background, attribution }: { background: string; attribution: Attribution }) => {
  return (
    <Layout background={background} attribution={attribution}>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  return await getUnsplash()
};

export default NTPPage;