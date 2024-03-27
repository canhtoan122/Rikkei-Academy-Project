import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const todoReducer  = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    deleteJob: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    jobStatus: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.status = action.payload.status;
      }
    },
    sortStatus: (state) => {
      state.sort((a, b) => {
        if (a.status === b.status) {
          return 0;
        }
        return a.status ? 1 : -1;
      });
    },
  },
})

// Action creators are generated for each case reducer function
export const { addJob, deleteJob, jobStatus, sortStatus } = todoReducer.actions

export default todoReducer.reducer