import React from 'react';
import { render } from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './components/App';
import { Background } from './components/Background';
import State from './state';

export const state = new State();

const Mount = () => (
    <>
        <Normalize />

        <Background provider={"unsplash"} />
        <App />
    </>
)

render(<Mount />, document.getElementById("ntp"))