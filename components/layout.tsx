import React from 'react'

import { MountEverest, BackgroundDisplay } from "./styles"
import { Time } from "../widgets/Time"
import { Metadata } from "./Metadata"

import { GlobalStyle } from './globalStyle';

const Layout = ({ children, background, attribution }: { children: any; background: string }) => {
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);

	return (
		<>
		<GlobalStyle />
			<BackgroundDisplay 
				src={background} 
				loaded={true} 
				dimmed={backgroundDimmed}
			/>
			<MountEverest>
				<Time />

				<div onMouseEnter={() => setBackgroundDimmed(true)} onMouseLeave={() => setBackgroundDimmed(false)}>
					<Metadata attribution={attribution}/>
				</div>
			</MountEverest>
		</>
	)
}

export default Layout