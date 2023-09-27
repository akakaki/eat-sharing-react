import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  isMobile: true,
}

const reducers = {
  setMobileValue: (state, action) => {
    state.isMobile = action.payload
  },
}

const store = createSlice({
  name: 'store',
  initialState,
  reducers,
})

export const { setMobileValue } = store.actions

export default configureStore ({
  reducer: {
    store: store.reducer,
  },
})
