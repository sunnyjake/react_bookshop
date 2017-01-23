import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Book from './components/book/BookPage';
import About from './components/common/AboutPage';
import Home from './components/common/HomePage';
import App from './App';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path='/books' component={Book}></Route>
    <Route path='/about' omponent={About}></Route>
  </Route>
);