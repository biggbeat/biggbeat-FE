import { request } from '@/actions'
import OTPScreenUI from '@/components/OtpInput/OtpScreenUI'
import {
  ACCESS_TYPES,
  BRAND_NAME,
  LOGIN_PAGE_ROUTE,
  SUCCESS_MESSAGE_TYPE,
  toastMessage,
  VERIFY_OTP_URL,
} from '@/constants'
import { MainContext } from '@/context/MainContext'
import { Form } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const OTPScreen = (props) => {
  const { MainState, dispatch } = useContext(MainContext)

  const [form] = Form.useForm()
  const router = useRouter()
  const email = props?.email
  const [loading, setloading] = useState(false)

  const handleSubmit = async (values) => {
    setloading(true)
    console.log({ values })
    const payload = {
      ...values,
      email,
    }
    const verifyOtp = await request({ apiurl: VERIFY_OTP_URL, data: payload })

    console.log({ verifyOtp })
    setloading(false)

    if (verifyOtp?.success) {
      toastMessage(SUCCESS_MESSAGE_TYPE, verifyOtp?.message)
      router.push(LOGIN_PAGE_ROUTE.url)
    }
  }
  useEffect(() => {
    if (!email) {
      router.back()
    }
  }, [])
  console.log({ MainState })
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page_wrapper_withoutmargin">
        <OTPScreenUI
          loading={loading}
          form={form}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  )
}
export default OTPScreen

export async function getServerSideProps(context) {
  let email = context.query.email
  console.log({ email })
  return {
    props: {
      email: email || null,
      accessType: ACCESS_TYPES.AUTH,
    },
  }
}
