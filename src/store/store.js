import { configureStore } from '@reduxjs/toolkit'
import reducers from '@/store/slicers'
import storage from 'redux-persist/lib/storage'
import { createWrapper } from 'next-redux-wrapper'

const persistConfig = {
  key: 'BIGGBEATS',
  storage,
  whitelist: ['user'],
}

const store = () =>
  configureStore({
    reducer: reducers,
  })
const wrapper = createWrapper(store)

export { store, wrapper }
