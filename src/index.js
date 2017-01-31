import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
