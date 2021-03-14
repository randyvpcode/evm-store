import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import productsReducer from '@/redux/reducers/products.reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  productsReducer,
})


const initStore = () => {
  return createStore(combinedReducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)