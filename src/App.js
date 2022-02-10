import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignUp } from './pages';
import customTheme from './theme';

const App = () => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Switch>
          <Route exact path="/" component={SignUp} />
        </Switch>
      </ChakraProvider>
    </>
  );
};

export default App;
