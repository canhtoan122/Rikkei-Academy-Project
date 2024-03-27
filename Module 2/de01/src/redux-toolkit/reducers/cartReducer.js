import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const cart  = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
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
export const { addItem, decrement, incrementByAmount } = cart.actions

export default cart.reducer