import { GET_ALL_COUNTRIES_URL, GET_HOME_BANNER_URL } from '@/constants'
import { getCall } from '@/services/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// create a slice
export const general = createSlice({
  name: 'general',
  initialState: {
    home: null,
  },

  reducers: {},
})
//actions

export const getBannerRequest = createAsyncThunk(
  'getBannerRequest',
  async (payloadData) => {
    const { payload, responseCallback } = payloadData
    try {
      console.log({ payloadData })
      const response = await getCall(GET_HOME_BANNER_URL, '', '')
      responseCallback(true, response)
      return response
    } catch (error) {
      responseCallback(false, error)

      return error
    }
  }
)

export default general.reducer
