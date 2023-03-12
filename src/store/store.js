import { configureStore } from '@reduxjs/toolkit'
import reducers from '@/store/slicers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'BIGGBEATS',
  storage,
  whitelist: ['user'],
}

const pReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: pReducer,
})
let persistor = persistStore(store)

export { store, persistor }
