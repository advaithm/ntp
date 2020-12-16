import React from 'react';
import { getUnsplash } from '../src/get-unsplash';

const NTPSettings = () => {
  return (
    <></>
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

export default NTPSettings;