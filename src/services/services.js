/* eslint-disable */
import { BASE_URL } from '@/constants'
import { userLogOutRequest } from '@/store/slicers/user'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const dispatch = useDispatch()

const USER_TOKEN = ''

export const getCall = async (urlObj, params = '', query = '', headers) =>
  new Promise(async (resolve, reject) => {
    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.get(`${BASE_URL}${Url}`, {
        headers: headers
          ? {
              ...headers,
            }
          : {
              ...(urlObj?.accesstoken
                ? { Authorization: `Bearer ${USER_TOKEN.value}` }
                : {}),
            },
      })
      if (response?.data?.length && response.status === 200) {
        let data = {
          success: true,
          data: response.data,
        }
        resolve({ data })
      }
      resolve(response)
    } catch (e) {
      if (e?.response?.status === 401) {
        dispatch(userLogOutRequest())
      }
      reject(e)
    }
  })
export const deleteCall = async (urlObj, params = '', query = '', headers) =>
  new Promise(async (resolve, reject) => {
    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.delete(`${BASE_URL}${Url}`, {
        headers: headers
          ? { ...headers }
          : {
              ...(urlObj?.accesstoken
                ? { Authorization: `Bearer ${USER_TOKEN.value}` }
                : {}),
            },
      })

      resolve(response)
    } catch (e) {
      if (e?.response?.status === 401) {
        dispatch(userLogOutRequest())
      }
      reject(e)
    }
  })

export const postCall = async (
  urlObj,
  data = {},
  params = '',
  query = '',
  headers
) =>
  new Promise(async (resolve, reject) => {
    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      console.log('data', data)
      const response = await axios.post(`${BASE_URL}${Url}`, data, {
        headers: headers
          ? { ...headers }
          : {
              ...(urlObj?.accesstoken
                ? { Authorization: `Bearer ${USER_TOKEN.value}` }
                : {}),
            },
      })
      console.log('response', response)
      resolve(response)
    } catch (e) {
      console.log('err', e)
      if (e?.response?.status === 401) {
        dispatch(userLogOutRequest())
      }
      reject(e)
    }
  })
export const patchCall = async (
  urlObj,
  data,
  params = '',
  query = '',
  headers
) =>
  new Promise(async (resolve, reject) => {
    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.put(`${BASE_URL}${Url}`, data, {
        headers: headers
          ? { ...headers }
          : {
              ...(urlObj?.accesstoken
                ? { Authorization: `Bearer ${USER_TOKEN.value}` }
                : {}),
            },
      })

      resolve(response)
    } catch (e) {
      if (e?.response?.status === 401) {
        dispatch(userLogOutRequest())
      }
      reject(null)
    }
  })
