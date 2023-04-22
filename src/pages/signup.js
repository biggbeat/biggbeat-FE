import Head from 'next/head'
import { ACCESS_TYPES, BRAND_NAME, OTP_PAGE_ROUTE } from '@/constants'
import SignUpPageUI from '@/components/SignUpPage/SignUpPageUI'
import { Form } from 'antd'
import { signUpRequest } from '@/actions/user'
import { useState } from 'react'
import { getBannerRequest } from '@/actions'
import { useRouter } from 'next/router'

export default function SignUp() {
  const [form] = Form.useForm()
  const router = useRouter()

  const [loading, setloading] = useState(false)

  const handleSubmit = async (values) => {
    setloading(true)
    console.log({ values })
    const payload = {
      name: `${values?.first_name} ${values?.last_name}`,
      ...values,
    }
    delete payload?.first_name
    delete payload?.last_name

    const signUpUser = await signUpRequest(payload)

    router.push(
      {
        pathname: OTP_PAGE_ROUTE.url,
        query: { email: values?.email },
      },
      OTP_PAGE_ROUTE.url
    )

    setloading(false)

    console.log({ signUpUser })
  }
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page_wrapper_withoutmargin">
        <SignUpPageUI
          loading={loading}
          handleSubmit={handleSubmit}
          form={form}
        />
      </div>
    </>
  )
}
export async function getStaticProps(context) {
  return {
    props: {
      accessType: ACCESS_TYPES.AUTH,
    },
  }
}
