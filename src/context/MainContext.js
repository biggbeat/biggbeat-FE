import React, { useContext, useEffect, useReducer } from 'react'
import { MainReducer, SET_DATA } from './reducers/MainReducer'

export const MainContext = React.createContext(null)

export default function MainProvider({ children }) {

  const [MainState, dispatch] = useReducer(MainReducer, {
    data: false,
  })

  useEffect(() => {
    dispatch({ type: SET_DATA, data: true })
  }, [])

  const data = {
    MainState,
    dispatch,
  }

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>
}
