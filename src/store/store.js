import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from '@/store/slicers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createWrapper } from 'next-redux-wrapper'

const persistConfig = {
  key: 'BIGGBEATS',
  storage,
  whitelist: ['user'],
}

const pReducer = persistReducer(persistConfig, reducers)
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})
const store = () =>
  configureStore({
    reducer: pReducer,
    middleware: customizedMiddleware,
  })
// const persistor = persistStore(store)
const wrapper = createWrapper(store)

export { store, wrapper }
