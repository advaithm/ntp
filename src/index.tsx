import React from 'react';
import { render } from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './components/App';
import { Background } from './components/Background';

const Mount = () => (
    <React.Fragment>
        <Normalize />

        <Background provider={"unsplash"} />
        <App />
    </React.Fragment>
)

render(<Mount />, document.getElementById("ntp"))