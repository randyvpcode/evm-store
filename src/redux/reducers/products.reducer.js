import { GET_PRODUCTS, GET_PRODUCT } from '@/utils/constants'

const initialState = {
  products: [],
  product: {}
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data.products
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload.data.product
      }
    default:
      return state
  }
}

export default productsReducer
