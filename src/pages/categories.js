import { request } from '@/actions'
import AllCategoriesUI from '@/components/AllCategoriesPage/AllCategoriesUI'
import { BRAND_NAME, GET_CATEGORY_URL } from '@/constants'
import Head from 'next/head'
import { useState } from 'react'

const CategoriesPage = (props) => {
  const [searchCategory, setsearchCategory] = useState('')
  let categories = props?.categories?.data?.data || []

  const handleSearch = (val) => {
    setsearchCategory(val)
  }
  categories = categories?.filter((item) =>
    searchCategory
      ? searchCategory
          ?.toLowerCase()
          .includes(item?.categoryTitle?.toLowerCase())
      : item
  )
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'page_wrapper'}>
        <AllCategoriesUI
          categories={categories || []}
          handleSearch={handleSearch}
          search={searchCategory}
        />
      </div>
    </>
  )
}
export default CategoriesPage

export async function getServerSideProps(context) {
  // let slug = getSlug(context.query.slug)
  const categories = await request({ apiurl: GET_CATEGORY_URL })
  console.log({ categories })
  return {
    props: {
      categories,
    },
  }
}
