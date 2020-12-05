import React from 'react';
import { getUnsplash } from '../src/get-unsplash';

const NTPSettings = () => {
  return (
    <></>
  )
}

export const getServerSideProps = async () => {
    return await getUnsplash()
};

export default NTPSettings;