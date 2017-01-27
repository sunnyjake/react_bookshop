import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
