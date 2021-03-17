import { GET_PRODUCTS, GET_PRODUCT } from '@/utils/constants'
import axios from 'axios'

export const getListProduct = () => {
  return (dispatch) =>
    axios
      .get(`/api/products`)
      .then((response) =>
        dispatch({
          type: GET_PRODUCTS,
          payload: response
        })
      )
      .catch((error) => {
        console.log(error)
      })
}

export const getListProductById = (id) => {
  return (dispatch) =>
    axios
      .get(`/api/products/${id}`)
      .then((response) =>
        dispatch({
          type: GET_PRODUCT,
          payload: response
        })
      )
      .catch((error) => {
        console.log(error)
      })
}
