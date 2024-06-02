// ApolloClientSetup.js
import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clww78g0506c307tei3h568fs/master',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
