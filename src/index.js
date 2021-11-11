import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";
import './styles/index.css';
import App from './components/App';


// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzNjU4Mjc3M30.zPc_PE_70DZZ3_3sawVID8MHOB5rrxaPj9w3OOFZ9RU"
    }
  }
});

// 3
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
 
