import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'
import CategoryPageUI from '@/components/CategoryPage/CategoryPageUI'
import FitlerDrawer from '@/components/FilterDrawer'
import { getProductsByCategoryRequest } from '@/actions/category'
import { CATEGORY_SORT_OPTIONS_VALUE } from '@/constants'

const Category = (props) => {
  const router = useRouter()

  const [popoverOpen, setpopoverOpen] = useState(false)
  const [openFilterDrawer, setopenFilterDrawer] = useState(false)
  const [rangeFilter, setrangeFilter] = useState([1000, 10000])
  const [sortByFilter, setsortByFilter] = useState(null)

  const [sizeFilter, setsizeFilter] = useState([])
  const [brandFilter, setbrandFilter] = useState([])

  const handleFilterRange = (val) => {
    setrangeFilter(val)
  }

  const handleSortFilter = (val) => {
    setsortByFilter(val)
  }

  const handleSizeFilter = (val) => {
    setsizeFilter(val)
  }

  const handleBrandFilter = (val) => {
    setbrandFilter(val)
  }

  let categoryProducts = [
    ...(props?.categoryProducts?.data?.data[0]?.products ?? []),
  ]

  const categoryDetails = {
    ...(props?.categoryProducts?.data?.data[0] ?? {}),
  }

  //filteringBysort
  categoryProducts = categoryProducts?.sort((a, b) =>
    sortByFilter === CATEGORY_SORT_OPTIONS_VALUE.lowTohigh
      ? Number(a?.price) - Number(b?.price)
      : sortByFilter === CATEGORY_SORT_OPTIONS_VALUE.highToLow
      ? Number(b?.price) - Number(a?.price)
      : sortByFilter === CATEGORY_SORT_OPTIONS_VALUE.discountLowToHigh &&
        Number(a?.discountedPrice) - Number(b?.discountedPrice)
  )

  //filtering By range

  if (rangeFilter?.length) {
    categoryProducts = categoryProducts?.filter(
      (item) =>
        Number(item?.price) >= rangeFilter[0] &&
        Number(item?.price) <= rangeFilter[1]
    )
  }
  categoryProducts = categoryProducts?.filter((item) =>
    sizeFilter?.length
      ? item?.attribute?.some((dt) =>
          dt?.childAttribute?.some((dta) => sizeFilter?.includes(dta.title))
        )
      : item
  )

  return (
    <div className={'page_wrapper'}>
      <CategoryPageUI
        //func
        setPopover={setpopoverOpen}
        handleFilterRange={handleFilterRange}
        handleDrawer={setopenFilterDrawer}
        handleSortFilter={handleSortFilter}
        //states
        products={categoryProducts || []}
        categoryDetails={categoryDetails}
        sortByFilter={sortByFilter}
        rangeFilter={rangeFilter}
        popOver={popoverOpen}
        openDrawer={openFilterDrawer}
      />
      <FitlerDrawer
        //states
        openDrawer={openFilterDrawer}
        sizeFilter={sizeFilter}
        brandFilter={brandFilter}
        //func
        handleDrawer={setopenFilterDrawer}
        handleSizeFilter={handleSizeFilter}
        handleBrandFilter={handleBrandFilter}
      />
    </div>
  )
}

export default Category

export async function getServerSideProps(context) {
  let slug = getSlug(context.query.slug)

  const categoryProducts = await getProductsByCategoryRequest(slug)

  return {
    props: {
      categoryName: slug,
      categoryProducts,
    },
  }
}
