import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import {
  ACCESS_TYPES,
  BRAND_NAME,
  GET_HOME_BANNER_URL,
  BASE_URL,
} from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import {
  CategorySectionSlider,
  HeroSection,
  CategorySelectionSection,
  ProductSection,
} from '@/components'
import dataHandler from '@/services/data-handler'
import { Suspense, useContext, useEffect, useState } from 'react'

import { MainContext } from '@/context/MainContext'
import { getCall } from '@/services/services'
import { getAllCategoriesProductsRequest, getBannerRequest } from '@/actions'
import {
  getCategoriesRequest,
  getSectionsRequest,
} from '@/actions/generalActions'
import Loading from './loading'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const { MainState, dispatch } = useContext(MainContext)
  const router = useRouter()
  const [selectedcategory, setselectedcategory] = useState(null)
  // const state = useSelector((state) => state)
  // const dispatch = useDispatch()
  // console.log({ state }, dataHandler.store.getState().user.user.jwt)
  const banners = props?.banners.data?.data
  const sections = props?.banners.data?.data
  const categories = props?.categories.data?.data
  const categoriesProducts = props?.categoriesProducts.data?.data

  // useEffect(() => {}, [MainState])

  const handleSelectedCategory = (id) => {
    setselectedcategory(id)
  }

  const handleRoute = (url) => {
    router.push(url)
  }
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page_wrapper}>
        <HeroSection banners={banners || []} />
        <CategorySectionSlider
          categories={categoriesProducts || []}
          selectedcategory={selectedcategory}
          handleSelectedCategory={handleSelectedCategory}
          handleRoute={handleRoute}
        />
        {categoriesProducts?.length > 0 && (
          <CategorySelectionSection
            selectedcategory={selectedcategory}
            products={
              selectedcategory
                ? categoriesProducts?.find((dt) => dt?._id == selectedcategory)
                    ?.products
                : categoriesProducts[0]?.products || []
            }
          />
        )}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const banners = await getBannerRequest()
  const sections = await getSectionsRequest()
  const categories = await getCategoriesRequest()
  const categoriesProducts = await getAllCategoriesProductsRequest()
  console.log({ categories })
  // Pass data to the page via props
  return {
    props: {
      banners,
      categories,
      categoriesProducts,
      sections,
      accessType: ACCESS_TYPES.PUBLIC,
    },
  }
}
