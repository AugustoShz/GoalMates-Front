import React from 'react';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
});

function apolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

const client = apolloClient();

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
