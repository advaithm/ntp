import React from 'react';
import { render } from 'react-dom';

import { Normalize } from 'styled-normalize';

import { App } from './components/App';
import { Background } from './components/Background';
import State from './state';

export const state = new State();

const Mount = () => {
  const [background] = React.useState(state.get().background);

  return (
    <>
      <Normalize />

      <Background provider={background.provider || 'unsplash'} />
      <App />
    </>
  );
};

render(<Mount />, document.getElementById('ntp'));
