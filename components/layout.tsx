import React from 'react'

import { MountEverest, BackgroundDisplay } from "./styles"
import { Time } from "../widgets/Time"
import { Metadata } from "../widgets/Metadata"

import { Attribution } from "./types"

import { Widgets } from '../src/widget'

const Layout = ({ children, background, attribution }: { children: any; background: string; attribution: Attribution }) => {
	const [ready, setReady] = React.useState(false);
	const [backgroundLoaded, setBackgroundLoaded] = React.useState(false);
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);

	React.useEffect(() => {
		setReady(true);

		if(typeof(window) !== "undefined") (window as any)["Widgets"] = Widgets;
	});

	return (
		<>
			<BackgroundDisplay 
				src={background} 
				loaded={true} 
				dimmed={backgroundDimmed}
				onLoad={() => setBackgroundLoaded(true)}
			/>
			{ready && <MountEverest>
				<Time />
				<Metadata attribution={attribution} actions={[setBackgroundDimmed]} />
			</MountEverest>}

			{children}
		</>
	)
}

export default Layout