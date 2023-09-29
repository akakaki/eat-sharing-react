import { createSlice, configureStore } from '@reduxjs/toolkit'
import { ACCOUNT_DATA } from '@/assets/data.js'

const initialState = {
  isMobile: true,
  info: {},
}

const reducers = {
  setMobileValue: (state, action) => {
    state.isMobile = action.payload
  },

  setInfo: (state, action) => {
    if (action.payload) {
      state.info = {}
    } else {
      state.info = ACCOUNT_DATA
    }
  },
}

const store = createSlice({
  name: 'store',
  initialState,
  reducers,
})

export const { setMobileValue, setInfo } = store.actions

export default configureStore ({
  reducer: {
    store: store.reducer,
  },
})
