export {GET_PAGE_CONTENT} from '../types'

const initialState = {
  pagesData: {
    createdAt: null,
    currentPage: null,
    id: null,
    total: null
  }
}

export default(state=initialState, action) => {
  switch (action.type){
    case 'GET_PAGE_CONTENT':
      return {
        ...state,
        pagesData: action.payload
      }
    default:
      return state;
  }

}
