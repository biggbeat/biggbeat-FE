import { postCall } from '@/services/services'

export const loginRequest = async (context, { payload, responseCallback }) => {
  try {
    const result = await postCall(
      LOGIN_URL,
      payload,
      LOGIN_URL.headers ? {} : null
    )

    if (result.data.data?.isAuthenticated) {
      responseCallback(true, result.data)
    } else {
      responseCallback(false, result.data)
    }

    return result
  } catch (error) {
    console.log('error', error)
  }
}
