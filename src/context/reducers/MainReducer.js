import { SET_USER_DATA_WHITE_LIST } from '@/constants'
import { LOGOUT_USER, SET_USER, SET_USER_DATA } from '../action-types'

export const SET_DATA = 'SET_DATA'

export function MainReducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.data }
    case SET_USER:
      return { ...state, user: action.user }
    case SET_USER_DATA: {
      SET_USER_DATA_WHITE_LIST(action.user)
      return { ...state, user: action.user }
    }
    case LOGOUT_USER: {
      SET_USER_DATA_WHITE_LIST(null)
      return { ...state, user: null }
    }
  }
}
