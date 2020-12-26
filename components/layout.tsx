import React from 'react'

import { MountEverest, BackgroundDisplay } from "./styles"

import { Attribution } from "./types"

import { Widgets } from '../src/widget'

import imagesLoaded from 'imagesloaded';

const Layout = ({ children, background, attribution }: { children: any; background: string; attribution: Attribution }) => {
	const [ready, setReady] = React.useState(false);
	const [backgroundVisible, setBackgroundVisible] = React.useState(true);
	const [backgroundLoaded, setBackgroundLoaded] = React.useState(false);
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);

	const [settingsVisible, setSettingsVisible] = React.useState(false);

	React.useEffect(() => {
		imagesLoaded("#background-display", (i: any) => {
			setTimeout(() => {
				setBackgroundLoaded(true);
			}, 1);
		})

		setReady(true);

		if(typeof(window) !== "undefined") (window as any)["Widgets"] = Widgets;
	});

	return (
		<>
			<BackgroundDisplay 
				src={background} 
				loaded={backgroundLoaded} 
				dimmed={backgroundDimmed}
				visible={backgroundVisible}
				id={"background-display"}
				settingsVisible={settingsVisible}
				onError={() => setBackgroundVisible(false)}
			/>
			
			<div style={{ display: "flex", flexDirection: "row" }}>
				{ready && <MountEverest settingsVisible={settingsVisible}>
					{Widgets.registeredWidgets.map((widget) => (
						<widget.component metadata={JSON.stringify({ name: widget.name, author: widget.author })} id={widget.id}  />
					))}
				</MountEverest>}
			</div>
			{children}
		</>
	)
}

export default Layout