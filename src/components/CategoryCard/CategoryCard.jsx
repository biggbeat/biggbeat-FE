import { SINGE_CATEGORY_PAGE_ROUTE } from '@/constants'
import { useRouter } from 'next/router'
import CategoryCardUI from './CategoryCardUI'

const CategoryCard = ({ item }) => {
  const router = useRouter()
  const image = item?.categoryImage
  const title = item?.categoryTitle

  const handleClick = () => {
    if (item?.categorySlug) {
      router.push(
        SINGE_CATEGORY_PAGE_ROUTE.url.replace(':slug', item?.categorySlug)
      )
    }
  }

  return (
    <CategoryCardUI title={title} image={image} handleClick={handleClick} />
  )
}
export default CategoryCard
