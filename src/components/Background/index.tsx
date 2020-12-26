import React from "react"

import { StyledBackground } from "./style";

export const Background = ({ provider }: { provider: 'unsplash' | 'solid' | 'gradient' | 'local' }) => {
    const [src, setSrc] = React.useState("");

    switch(provider) {
        case 'unsplash':
            setSrc("")
        case 'solid':
            setSrc('linear-gradient(red)')
    }

    return (
        <StyledBackground src={src} />
    )
}