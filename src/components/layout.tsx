/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { MountEverest, BackgroundDisplay, Attribution, Geolocation, Metadata } from './style';

import "./layout.css"
import "fontsource-inter/latin.css"

import { unsplashPlugin } from "../plugins/unsplash";

import { Time } from "../widgets/Time";

const Layout = ({ children }) => {
	const localStorageState = typeof(localStorage) !== "undefined" && localStorage.getItem("settings")

	const [widgetsReady, setWidgetsReady] = React.useState(false);

	const [background, setBackground] = React.useState();
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

	const copyCoords = location => {
		if(typeof(navigator) == "undefined") return;

		let data = "";

		if(location.position) data = `${location.position[0]}, ${location.position[1]}`;
		else data = location.pretty;

		navigator.clipboard.writeText(data);

		alert(`Copied "${data}" to clipboard.`)
	}

	React.useEffect(() => {
		if(backgroundSet || backgroundGetProcess) return;

		setBackgroundGetProcess(true);

		unsplashPlugin.api.getBackground().then(imageData => {
			setBackground(imageData.image)
			setBackgroundSet(true)

			setState({ attribution: imageData.attribution, location: imageData.attribution.l })
		})
	}, [setState, state.background]);

	return (
		<>
			<BackgroundDisplay 
				src={background} 
				loaded={backgroundLoaded} 
				dimmed={backgroundDimmed}
				onLoad={() => setBackgroundLoaded(!backgroundLoaded)} 
			/>

			<MountEverest>
				<Time />

				<Metadata visible={backgroundLoaded} onMouseEnter={() => setBackgroundDimmed(true)} onMouseLeave={() => setBackgroundDimmed(false)}>
					<Attribution>
						<a target={"__blank"} href={state.attribution.p}>Photo</a> by <a target={"__blank"} href={`https://unsplash.com/@${state.attribution.usn}`}>{state.attribution.n}</a> on <a target={"__blank"} href={`https://unsplash.com`}>Unsplash</a>
					</Attribution>

				{state.location && <Geolocation>
						<a style={{ cursor: "pointer" }} onClick={() => copyCoords(state.location)}>{state.location}</a>
					</Geolocation>}
				</Metadata>

				{children}
			</MountEverest>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
