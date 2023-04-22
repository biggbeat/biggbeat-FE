import { getCategoriesRequest } from '@/actions'
import AllCategoriesUI from '@/components/AllCategoriesPage/AllCategoriesUI'
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
    <div className={'page_wrapper'}>
      <AllCategoriesUI
        categories={categories || []}
        handleSearch={handleSearch}
        search={searchCategory}
      />
    </div>
  )
}
export default CategoriesPage

export async function getServerSideProps(context) {
  // let slug = getSlug(context.query.slug)
  const categories = await getCategoriesRequest()

  return {
    props: {
      categories,
    },
  }
}
