import { request } from '@/actions'
import ForgotPasswordUI from '@/components/ForgotPasswordUI/ForgotPasswordUI'
import {
  ACCESS_TYPES,
  BRAND_NAME,
  LOGIN_PAGE_ROUTE,
  OTP_PAGE_ROUTE,
  RESEND_OTP_TO_EMAIL_URL,
  RESET_PASSWORD_PAGE_ROUTE,
  SUCCESS_MESSAGE_TYPE,
  toastMessage,
  VERIFY_OTP_URL,
} from '@/constants'
import { MainContext } from '@/context/MainContext'
import { Form } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const ForgotPassword = (props) => {
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
    }
    const verifyOtp = await request({
      apiurl: RESEND_OTP_TO_EMAIL_URL,
      data: payload,
    })
    console.log({ verifyOtp })
    setloading(false)

    if (verifyOtp?.success) {
      toastMessage(SUCCESS_MESSAGE_TYPE, verifyOtp?.message)
      router.push(
        {
          query: { ...payload, forPage: RESET_PASSWORD_PAGE_ROUTE.title },
          pathname: OTP_PAGE_ROUTE.url,
        },
        OTP_PAGE_ROUTE.url
      )
    }
  }

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
        <ForgotPasswordUI
          loading={loading}
          form={form}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  )
}
export default ForgotPassword

export async function getServerSideProps(context) {
  return {
    props: {
      accessType: ACCESS_TYPES.AUTH,
    },
  }
}
