import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppGlobalStyle from 'components/App/globalStyles';

configure(require.context('../src', true, /\.stories\.js$/), module);

const ThemeDecorator = storyFn => (
  <>
    <AppGlobalStyle />
    <ThemeProvider theme={{ size: 'medium', mode: 'dark' }}>
      {storyFn()}
    </ThemeProvider>
  </>
);

addDecorator(ThemeDecorator);
