import React from "react"

import { StyledApp } from "../../style"

import widgets from "../../widgets"

import { Widget } from "../Widget"

export const App = () => {
    return (
        <StyledApp>
            {Object.entries(widgets).map(([id, Component]) => (
                <Widget id={id} key={id}>
                    <Component />
                </Widget>
            ))}
        </StyledApp>
    )
}