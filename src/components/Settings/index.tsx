import React from 'react';
import ReactDom from 'react-dom';
import {
  StyledSettingsBackground,
  StyledSettingsH2,
  StyledSettingsInnerBacksheet,
  StyledSettingsP
} from './styles';

const Settings = () => {
  return (
    <StyledSettingsBackground>
      <StyledSettingsInnerBacksheet>
        <StyledSettingsH2>Theme</StyledSettingsH2>
      </StyledSettingsInnerBacksheet>
    </StyledSettingsBackground>
  );
};

const Themeswitcher = () => {
  return <></>;
};

export default Settings;
