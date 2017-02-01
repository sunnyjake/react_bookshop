import {GET_BOOK_SUCCESS} from '../types';

export default (state=[], action) => {
  switch (action.type) {
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        bookData: action.payload
      }
    default:
      return state;
  }
}
