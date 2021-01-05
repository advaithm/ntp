import React from "react"

import { StyledBackground } from "./style";

export const Background = ({ provider }: { provider: 'unsplash' | 'solid' | 'gradient' | 'local' }) => {
    const [src, setSrc] = React.useState("unset");
    const [unsplashStarted, setUnsplashStarted] = React.useState(false);
    const [ready, setReady] = React.useState(provider == "unsplash" ? false : true);

    React.useEffect(() => {
        if(provider == "unsplash") {
            if(unsplashStarted) return;
            setUnsplashStarted(true);

            let preload: any = new Image();
            preload.src = `/api/backgrounds/unsplash`;
            preload.crossOrigin = 'anonymous';

            preload.addEventListener("load", () => {
                setSrc(`url(${preload.getAttribute("src")})`);
                preload = undefined;
                setReady(true);
            });
        }
        else if(provider == "solid") {
            setSrc("linear-gradient(red, red)");
        }
    })

    return (
        <StyledBackground ready={ready} provider={provider} src={src} />
    )
}