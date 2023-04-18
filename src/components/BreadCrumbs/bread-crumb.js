import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
  const location = useRouter()
  const { asPath } = location
  const pathname = asPath?.split('/').filter((item) => item)

  console.log({ location })
  return (
    <Breadcrumb separator=">">
      {pathname?.length > 0 ? (
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      )}
    </Breadcrumb>
  )
}
export default Breadcrumbs
