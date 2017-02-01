import {combineReducers} from 'redux';
import pages from './pageReducer';
import books from './testReducer';

export default combineReducers({
  pages: pages,
  books: books
});
