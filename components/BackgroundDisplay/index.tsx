import React from 'react';
import Image from 'next/image'

export const BackgroundDisplay = (src: string, loaded: boolean, dimmed: boolean) => {
  console.log(src.src)
  return (
    <>
      {loaded && <>
      <img src={ src.src } className="background" />
      <style jsx>{`
        .background {
          margin: 0 auto;
        }
      `}</style>
      </>}
    </>
  )

}