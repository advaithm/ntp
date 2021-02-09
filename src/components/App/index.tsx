import React from 'react';

import { StyledApp } from '../../style';

import widgets from '../../widgets';

import { Widget } from '../Widget';

import Settings from '../Settings';

export const App = () => {
  return (
    <StyledApp>
      {Object.entries(widgets).map(([id, w]) => (
        <Widget id={id} key={id} defaultSlot={w.defaultPosition}>
          <w.component />
        </Widget>
      ))}
      <Settings></Settings>
    </StyledApp>
  );
};
