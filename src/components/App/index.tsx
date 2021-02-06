import React from "react"

import { StyledApp } from "../../style"

import widgets from "../../widgets"

import { Widget } from "../Widget"

export const App = () => {
    return (
        <StyledApp>
            {Object.entries(widgets).map(([id, w]) => (
                <Widget id={id} key={id} defaultSlot={w.defaultPosition}>
                    <w.component />
                </Widget>
            ))}
        </StyledApp>
    )
}