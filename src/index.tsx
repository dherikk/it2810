import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './services/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}> 
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
