import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import AuthProvider from './src/context/AuthProvider';

const App = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
