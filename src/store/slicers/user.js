import { GET_ALL_COUNTRIES_URL } from '@/constants'
import { getCall } from '@/services/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// create a slice
export const user = createSlice({
  name: 'user',
  initialState: {
    user: 'user',
    country: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCountriesRequest.fulfilled, (state, action) => {
      state.country = action.payload
    })
  },
  reducers: {
    userLoginRequest: (state, payload) => {
      state.user = 'userbro'
    },
    userLogOutRequest: (state) => {
      state.user = null
    },
  },
})
//actions

export const getCountriesRequest = createAsyncThunk(
  'getCountriesRequest',
  async (payloadData) => {
    const { payload, responseCallback } = payloadData
    try {
      console.log({ payloadData })
      const response = await getCall(GET_ALL_COUNTRIES_URL, '', '')
      responseCallback(true, response)
      return response
    } catch (error) {
      responseCallback(false, error)

      return error
    }
  }
)
export const { userLogOutRequest, userLoginRequest } = user.actions

export default user.reducer
