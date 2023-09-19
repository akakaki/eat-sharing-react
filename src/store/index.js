
import { configureStore, createSlice } from '@reduxjs/toolkit'

// https://redux.js.org/tutorials/quick-start

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 123123,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },

    incrementCount: (state, action) => {
      state.value += action.payload
    },
  }
})

export const { increment, incrementCount } = counterSlice.actions

export default configureStore ({
  reducer: {
    counter: counterSlice.reducer,
  },
})
