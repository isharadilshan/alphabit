import 'react-native-gesture-handler';
import React from 'react';
import type {ReactNode} from 'react';
import {PaperProvider} from 'react-native-paper';
import Routes from '../routes';
import GlobalExceptionHandler from '../components/organisms/GlobalExceptionHandler';
import NoNetworkFound from '../components/organisms/NoNetworkFound';
import {ApolloProvider} from '@apollo/client';
import client from '../cms/ApolloClient';

const App: () => ReactNode = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <GlobalExceptionHandler />
        <NoNetworkFound />
        <Routes />
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
