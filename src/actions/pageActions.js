import axios from 'axios';
export {GET_PAGE_CONTENT} from '../types'


export function fetchContent(page) {
  return(dispatch) => {
    return axios.get('http://588fcc417458d612002df0d7.mockapi.io/api/campaign/pages')
    .then(data => {
      return axios({
        method: 'get',
        // url: '/api/campaign?page='+page,
        url: 'http://588fcc417458d612002df0d7.mockapi.io/api/campaign/pages/'+page,
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL21pZHdpbnRlci1tYXAuY29tXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ4NTUwNzI4MiwiZXhwIjoxNDg2NzE2ODgyLCJuYmYiOjE0ODU1MDcyODIsImp0aSI6ImEyZDliNmE2MjQ1MjlmMWUyNDRjZWZjNGMwN2QxOGI3In0.5FV6Up3s6X__LW5qJVL7MdRnTkfOZLmBiwUCI4PjnPM'
        // }
      }).then(r => {
        return dispatch({
          type: 'GET_PAGE_CONTENT',
          payload: {
            ...r.data,
            total: data.data.length
          }
        })
      })
    })

  }
}
