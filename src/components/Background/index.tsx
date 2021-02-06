import React from "react"

import { StyledBackground } from "./style";

import backgrounds from '../../backgrounds'
import { state } from "../..";

export const Background = ({ provider }: { provider: 'unsplash' | 'solid' | 'gradient' | 'local' }) => {
    const [settings, setSettings] = React.useState(state.get().background);

    const ref = React.createRef<HTMLDivElement>();
    const [src, setSrc] = React.useState("unset");
    const [unsplashStarted, setUnsplashStarted] = React.useState(false);
    const [ready, setReady] = React.useState(provider == "unsplash" ? false : true);

    React.useEffect(() => {
        if(!settings) {
            setSettings({
                provider: "unsplash",
                src: ""
            })
        }

        if(provider == "unsplash") {
            if(unsplashStarted) return;
            setUnsplashStarted(true);

            const url = `/backgrounds/unsplash/${backgrounds[Math.floor(Math.random() * (backgrounds.length - 0) + 0)].id}.jpeg`;
            setSrc(`url(${url})`);

            const imgCache = new Image();
            imgCache.src = url;

            imgCache.addEventListener("load", (e) => {
                setReady(true);
            })
        }
        else if(provider == "solid") {
            setSrc(settings.src);
        }
    })

    return (
        <StyledBackground ref={ref} ready={ready} provider={provider} src={src} />
    )
}