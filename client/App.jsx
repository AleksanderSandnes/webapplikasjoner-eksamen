import React from 'react';
import { CSSReset } from '@chakra-ui/core';
import Routes from './src/routes/Routes';
import AuthProvider from './src/context/AuthProvider';

import Theme from './src/styles/Theme';

const App = () => (
  <Theme>
    <CSSReset />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </Theme>
);

export default App;
