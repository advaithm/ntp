import React from "react"

import { StyledBackground } from "./style";

export const Background = ({ provider }: { provider: 'unsplash' | 'solid' | 'gradient' | 'local' }) => {
    const [src, setSrc] = React.useState("");

    React.useEffect(() => {
        if(provider == "unsplash") setSrc("![unsplashBackgroundInject]")
        else if(provider == "solid") setSrc("linear-gradient(red)")
    })

    return (
        <StyledBackground src={src} />
    )
}