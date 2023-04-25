import {
  LOGIN_URL,
  RESEND_OTP_TO_EMAIL_URL,
  SIGN_UP_URL,
  VERIFY_OTP_URL,
} from '@/constants'
import { manupulateResponse } from '@/services/responseManupulator'
import { postCall } from '@/services/services'

export const resendOtpToEmailRequest = async (payload) => {
  try {
    const res = await postCall(RESEND_OTP_TO_EMAIL_URL, payload)
    return manupulateResponse(res)
  } catch (error) {
    return manupulateResponse(error)
  }
}
