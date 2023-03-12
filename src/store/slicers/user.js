import { createSlice } from '@reduxjs/toolkit'

// create a slice
export const user = createSlice({
  name: 'user',
  initialState: {
    user: 'user',
  },
  reducers: {
    userLoginRequest: (state, payload) => {
      state.user = 'user'
    },
    userLogOutRequest: (state) => {
      state.user = null
    },
  },
})
export const { userLogOutRequest } = user.actions

export default user.reducer
