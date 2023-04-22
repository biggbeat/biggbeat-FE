// import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'
import { ConfigProvider, Spin } from 'antd'
import variables from '@/styles/variables.module.scss'
import { AuthSharedLayout, PublicSharedLayout } from '@/layouts'
import { useEffect, useState } from 'react'
import dataHandler from '@/services/data-handler'
import { Jost } from '@next/font/google'
import MainProvider from '@/context/MainContext'
import { ACCESS_TYPES } from '@/constants'
const jost = Jost({ subsets: ['latin'] })
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(() => true)

  useEffect(() => {
    // if (store) {
    //   console.log({ store })
    //   dataHandler.setStore(store)
    // }
    setLoading(false)
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
          colorIcon: variables.primaryText,
          colorIconHover: variables.secondaryText,
          fontFamily: `Jost`,
          colorPrimary: variables.secondaryText,
          colorLink: variables.primaryText,
          colorLinkActive: variables.secondaryText,
          colorLinkHover: variables.secondaryText,
          colorPrimaryHover: variables.secondaryText,
          // colorTextPlaceholder: variables.placeholderColor,
          // colorPrimaryBg: variables.s,
          // bgRed: variables.bgRed,
        },
      }}
    >
      <MainProvider>
        {pageProps?.accessType === ACCESS_TYPES.AUTH ? (
          <AuthSharedLayout>
            <Component {...pageProps} />
          </AuthSharedLayout>
        ) : (
          <PublicSharedLayout>
            <Component {...pageProps} />
          </PublicSharedLayout>
        )}
      </MainProvider>
    </ConfigProvider>
  )
}
export default App
