/* eslint-disable */
import { BASE_URL } from '@/constants'
import { userLogOutRequest } from '@/store/slicers/user'
import axios from 'axios'
import dataHandler from './data-handler'

export const getCall = async (urlObj, params = '', query = '', headers) =>
  new Promise(async (resolve, reject) => {
    const USER_TOKEN = dataHandler.store.getState().user.user.jwt
    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.get(`${BASE_URL}${Url}`, {
        headers: {
          ...(headers ? { ...headers } : {}),
          ...(urlObj?.accesstoken
            ? { Authorization: `Bearer ${USER_TOKEN}` }
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
        dataHandler.getStore().dispatch(userLogOutRequest())
      }
      reject(e)
    }
  })
export const deleteCall = async (urlObj, params = '', query = '', headers) =>
  new Promise(async (resolve, reject) => {
    const USER_TOKEN = dataHandler.store.getState().user.user.jwt

    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.delete(`${BASE_URL}${Url}`, {
        headers: {
          ...(headers ? { ...headers } : {}),
          ...(urlObj?.accesstoken
            ? { Authorization: `Bearer ${USER_TOKEN}` }
            : {}),
        },
      })

      resolve(response)
    } catch (e) {
      if (e?.response?.status === 401) {
        dataHandler.getStore().dispatch(userLogOutRequest())
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
    const USER_TOKEN = dataHandler.store.getState().user.user.jwt

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
        headers: {
          ...(headers ? { ...headers } : {}),
          ...(urlObj?.accesstoken
            ? { Authorization: `Bearer ${USER_TOKEN}` }
            : {}),
        },
      })
      console.log('response', response)
      resolve(response)
    } catch (e) {
      console.log('err', e)
      if (e?.response?.status === 401) {
        dataHandler.getStore().dispatch(userLogOutRequest())
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
    const USER_TOKEN = dataHandler.store.getState().user.user.jwt

    let Url = `${urlObj.url}`
    if (params) {
      Url = `${Url}/` + params
    }
    if (query) {
      Url = `${Url}?` + query
    }
    try {
      const response = await axios.put(`${BASE_URL}${Url}`, data, {
        headers: {
          ...(headers ? { ...headers } : {}),
          ...(urlObj?.accesstoken
            ? { Authorization: `Bearer ${USER_TOKEN}` }
            : {}),
        },
      })

      resolve(response)
    } catch (e) {
      if (e?.response?.status === 401) {
        dataHandler.getStore().dispatch(userLogOutRequest())
      }
      reject(null)
    }
  })
