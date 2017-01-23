import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Book from './components/book/BookPage';
import About from './components/common/AboutPage';
import Home from './components/common/HomePage';
import App from './components/App';

export default(
  <Route path='/'>
    <IndexRoute component={App}></IndexRoute>
    <Route path='/books' component={Book}></Route>
    <Route path='/about' omponent={About}></Route>
  </Route>
);
