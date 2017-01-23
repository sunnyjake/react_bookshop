// import 'babel-polyfill';
// import React from 'react';
// import {render} from 'react-dom';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes'
// // import App from './App';
// // import './index.css';
//
// render(
//   <Router routes={routes} history={browserHistory} />,
//   document.getElementById('root')
// );

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory} from 'react-router'
// import './main.sass';
// import './media.sass';
import routes from './routes'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import {createStore, applyMiddleware, compose} from 'redux'
// import rootReducer from './reducers/rootReducer'

// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )
//
// window.store = store.getState();

render(
    <Router history={browserHistory} routes={routes}/>,
  document.getElementById('root')
);
