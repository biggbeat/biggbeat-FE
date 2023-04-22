import {
  ERROR_MESSAGE_TYPE,
  SUCCESS_MESSAGE_TYPE,
  SUCCESS_STATUS,
  toastMessage,
} from '@/constants'

export const manupulateResponse = (response) => {
  let sendresp = {
    success: false,
    message: '',
    data: null,
  }
  if (response.data.status !== SUCCESS_STATUS) {
    sendresp.success = false
    sendresp.data = response.data
    sendresp.message = response.data.message || ''
    toastMessage(ERROR_MESSAGE_TYPE, response.data.message)
    return sendresp
  } else if (response.status === 200) {
    sendresp.success = true
    sendresp.data = response.data
    sendresp.message = response.data.message || ''
    return sendresp
  } else {
    return sendresp
  }
}
