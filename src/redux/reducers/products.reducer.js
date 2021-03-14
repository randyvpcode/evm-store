import {GET_PRODUCTS} from '@/utils/constants'

const initialState = {
  products: []
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data
      }
    default:
      return state
  }
}

export default productsReducer