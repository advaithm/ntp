import React from 'react'

import { BackgroundDisplay } from "./BackgroundDisplay"

import { getBackground } from "../plugins/unsplash/background" 
import { GlobalStyle } from './style';

const Layout = ({ children, background }: { children: any; background: string }) => {
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);

	return (
		<>
			<GlobalStyle />
			<BackgroundDisplay 
				src={background} 
				loaded={true} 
				dimmed={backgroundDimmed}
			/>
		</>
	)
}

export default Layout