import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import GameLogic from "./components/GameLogic/GameLogic";
import Login from "./components/Login";
import Signup from "./components/Signup"
//import Auth from '../utils/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/gamelogic" component={GameLogic} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;