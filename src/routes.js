import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Pagination from './components/Pagination';
import Page from './components/Page';


export default(
  <Route path="/" component={App}>
    <Route path="/pages/:page" component={Pagination} />
    <Route path="/test" component={Page}/>
  </Route>
)
