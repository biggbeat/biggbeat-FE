export const manupulateResponse = (response) => {
  let sendresp = {
    success: false,
    message: '',
    data: null,
  }
  if (response.status === 200) {
    sendresp.success = true
    sendresp.data = response.data
    sendresp.message = response.data.message || ''
    return sendresp
  } else {
    return sendresp
  }
}
