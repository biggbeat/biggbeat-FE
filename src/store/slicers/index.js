import { combineReducers } from '@reduxjs/toolkit'
import user from './user'
import general from './general'

export default combineReducers({ user, general })
