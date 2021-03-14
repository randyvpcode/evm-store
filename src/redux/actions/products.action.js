  
import { GET_PRODUCTS } from '@/utils/constants'
import {request} from '../../configs'

export const getListProduct = () => {
  return dispatch => request.get(`/products`)
  .then(response => dispatch({
    type: GET_PRODUCTS,
    payload: response
  }))
  .catch(error => {
      console.log("error")
      console.log(error)
  })
  
}
