import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const todoList  = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addJob, decrement, incrementByAmount } = todoList.actions

export default todoList.reducer