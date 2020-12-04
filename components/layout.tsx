import React from 'react'

import { BackgroundDisplay } from "./BackgroundDisplay"

import { getBackground } from "../plugins/unsplash/background" 

const Layout = ({ children }) => {
  const [background, setBackground] = React.useState("");
	const [backgroundGetProcess, setBackgroundGetProcess] = React.useState(false);
	const [backgroundSet, setBackgroundSet] = React.useState(false);
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);
	const [backgroundLoaded, setBackgroundLoaded] = React.useState(false);

	const defaultState = {
		attribution: {
			l: "",
			lp: [],
			n: "",
			p: "",
			usn: "",
		},
		location: null,
		background: { 
			last: 0
		} 
  }

  const [state, _setState] = React.useState(defaultState)

	const setState = payload => {	 
		_setState({ ...state, ...payload });
	};
  
  React.useEffect(() => {
    if (backgroundSet || backgroundGetProcess) return

    setBackgroundGetProcess(true)

    const image = getBackground()
    .then(image => {
      console.log(image)
      setBackground("https://images.unsplash.com/photo-" + image.id + "?w=1920")

      setBackgroundSet(true)
    })
  }, [setState, state.background])

  return (
    <>
      <BackgroundDisplay 
				src={background} 
				loaded={backgroundLoaded} 
				dimmed={backgroundDimmed}
				onLoad={() => setBackgroundLoaded(!backgroundLoaded)} 
			/>
    </>
  )
}

export default Layout