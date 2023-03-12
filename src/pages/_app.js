// import 'antd/dist/antd.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { store, persistor } from '@/store/store'
import '@/styles/globals.css'
import { ConfigProvider, Spin } from 'antd'
import { Provider } from 'react-redux'
import variables from '@/styles/variables.module.scss'
import { AuthSharedLayout } from '@/layouts'
import { useEffect, useState } from 'react'
import dataHandler from '@/services/data-handler'
import { PersistGate } from 'redux-persist/integration/react'
import { Jost } from '@next/font/google'
const jost = Jost({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(() => true)

  useEffect(() => {
    if (store) {
      console.log({ store })
      dataHandler.setStore(store)
      setLoading(false)
    }
  }, [])

  console.log({ pageProps, Component })

  return loading ? (
    <div className="loader-wrapper">
      <Spin />
    </div>
  ) : (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: `Jost`,
          colorPrimary: variables.primaryText,
          colorLink: variables.primaryText,
          colorLinkActive: variables.secondaryText,
          colorLinkHover: variables.secondaryText,
          colorPrimaryHover: variables.secondaryText,
          colorTextPlaceholder: variables.placeholderColor,
          colorPrimaryBg: variables.bgPrimary,
        },
      }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthSharedLayout>
            <Component {...pageProps} />
          </AuthSharedLayout>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  )
}
