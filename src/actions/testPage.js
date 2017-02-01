import axios from 'axios';
import {GET_BOOK_SUCCESS} from '../types';

export function testFun(book){
  return dispatch => {
    return axios.get('http://58921345f2fba312001d93b0.mockapi.io/books/'+book)
    .then(data => {
      return dispatch({
        type: GET_BOOK_SUCCESS,
        payload: {
          ...data
        }
      })
    })
  }
}
