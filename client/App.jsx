import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Routes from './src/routes/Routes';
import customTheme from './src/styles/theme';
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
