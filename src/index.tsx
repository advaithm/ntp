import React from 'react';
import { render } from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './components/App';
import { Background } from './components/Background';

const Mount = () => (
    <>
        <Normalize />

        <Background provider={"solid"} />
        <App />
    </>
)

render(<Mount />, document.getElementById("ntp"))