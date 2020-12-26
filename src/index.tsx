import React from 'react';
import { render } from 'react-dom';

import { StyledApp } from './style';

const App = () => (
    <StyledApp>
        hi
    </StyledApp>
)

render(<App />, document.getElementById("ntp"))