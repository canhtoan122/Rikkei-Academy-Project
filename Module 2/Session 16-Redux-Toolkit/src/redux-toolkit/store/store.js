import { configureStore } from '@reduxjs/toolkit'
import counters from '../reducers/counters'
import todolists from '../reducers/todolists'


export const store = configureStore({
  reducer: {
    counter:counters,
    todolist:todolists
  },
})