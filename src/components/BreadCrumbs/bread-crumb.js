import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = ({ crumbs }) => {
  const location = useRouter()
  const { asPath } = location
  const pathname = asPath?.split('/').filter((item) => item)

  console.log({ location })
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {crumbs?.map((item) => (
        <Breadcrumb.Item>{item.label}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
export default Breadcrumbs
