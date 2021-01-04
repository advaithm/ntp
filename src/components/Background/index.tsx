import React from "react"

import { StyledBackground } from "./style";

export const Background = ({ provider }: { provider: 'unsplash' | 'solid' | 'gradient' | 'local' }) => {
    const [src, setSrc] = React.useState("unset");

    React.useEffect(() => {
        if(provider == "unsplash") {
            setSrc(`url(/api/backgrounds/unsplash)`)
        }
        else if(provider == "solid") setSrc("linear-gradient(red, red)")
    })

    return (
        <StyledBackground src={src} />
    )
}