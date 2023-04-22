import { LOGIN_URL, SIGN_UP_URL, VERIFY_OTP_URL } from '@/constants'
import { manupulateResponse } from '@/services/responseManupulator'
import { postCall } from '@/services/services'

export const signUpRequest = async (payload) => {
  try {
    const res = await postCall(SIGN_UP_URL, payload)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}

export const loginRequest = async (payload) => {
  try {
    const res = await postCall(LOGIN_URL, payload)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}

export const verifyOtpRequest = async (payload) => {
  try {
    const res = await postCall(VERIFY_OTP_URL, payload)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
