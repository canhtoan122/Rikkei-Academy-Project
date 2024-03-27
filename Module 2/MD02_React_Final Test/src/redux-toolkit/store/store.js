import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../reducer/todoReducer'


export const store = configureStore({
  reducer: {
    todoReducer:todoReducers
  },
})