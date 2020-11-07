/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { MountEverest, BackgroundDisplay, Attribution, Geolocation, Metadata, Time } from './style';

import "./layout.css"
import "fontsource-inter/latin.css"

import { unsplashPlugin } from "../plugins/unsplash";
import { Link } from "gatsby";

const Layout = ({ children }) => {
	const localStorageState = typeof(localStorage) !== "undefined" && localStorage.getItem("settings")

	const [widgetsReady, setWidgetsReady] = React.useState(false);
	const [time, setTime] = React.useState("");

	const [background, setBackground] = React.useState();
	const [backgroundSet, setBackgroundSet] = React.useState(false);
	const [backgroundDimmed, setBackgroundDimmed] = React.useState(false);
	const [backgroundLoaded, setBackgroundLoaded] = React.useState(false);

	const defaultState = {
		attribution: {
			name: "",
			logon: "",
			originalPhoto: ""
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

	setInterval(() => {
		const d = new Date();

		const getH = () => {
			return d.getHours().toString().length == 1 ? "0" + d.getHours() : d.getHours()
		}

		const getM = () => {
			return d.getMinutes().toString().length == 1 ? "0" + d.getMinutes() : d.getMinutes()
		}

		const getS = () => {
			return d.getSeconds().toString().length == 1 ? "0" + d.getSeconds() : d.getSeconds()
		}

		setTime(`${getH()}:${getM()}`)

		if(!widgetsReady) setWidgetsReady(true);
	}, 2500);
	
	React.useEffect(() => {
		if(backgroundSet) return;

		unsplashPlugin.api.getBackground().then(({ url, attribution, location }) => {
			setState({ attribution, location: !!location ? location : null })

			setBackground(url);
			setBackgroundSet(true);
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
				<Time visible={widgetsReady}>
					{time}
				</Time>

				<Metadata visible={backgroundLoaded} onMouseEnter={() => setBackgroundDimmed(true)} onMouseLeave={() => setBackgroundDimmed(false)}>
					<Attribution>
						Photo by <Link target={"__blank"} to={`https://unsplash.com/@${state.attribution.logon}`}>{state.attribution.name}</Link> on <Link target={"__blank"} to={`https://unsplash.com`}>Unsplash</Link>
					</Attribution>

					{state.location && <Geolocation>
						<Link to={"#"} onClick={() => copyCoords(state.location)}>{state.location.pretty}</Link>
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
