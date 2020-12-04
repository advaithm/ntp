import React from 'react';

export const BackgroundDisplay = (src: string, loaded: boolean, dimmed: boolean) => {
  console.log(src.src)
  return (
    <>
      {loaded && <>
      <img src={ src.src } className="background" />
      <style jsx>{`
        .background {}
          width: 100%;
          height: 100vh;
          object-fit: cover;
          transition: 0.7s opacity, 0.7s transform, 0.2s filter;
    
          @keyframes fade { 
            from: {
                opacity: 0;
            }
    
            to {
                opacity: 0.8;
            }
          }
        }
      `}</style>
      </>}
    </>
  )

}