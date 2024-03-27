import { configureStore } from '@reduxjs/toolkit'
import carts from '../reducers/cartReducer'


export const store = configureStore({
  reducer: {
    cart:carts
  },
})