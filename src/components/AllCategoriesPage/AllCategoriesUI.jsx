import { BREAD_CRUMBS_PAGES, FOUR_ITEMS_ROW, FULL_ROW } from '@/constants'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row } from 'antd'
import Breadcrumbs from '../BreadCrumbs/bread-crumb'
import CategoryCard from '../CategoryCard/CategoryCard'
import styles from './styles.module.scss'
const AllCategoriesUI = ({ categories, handleSearch, search }) => {
  return (
    <div className={styles.AllCategoriesUI}>
      <Row gutter={[16, 24]} justify="end">
        <Col span={24}>
          <Breadcrumbs crumbs={BREAD_CRUMBS_PAGES.SINGLE_CATEGORY_PAGE} />
        </Col>
        <Col>
          <Input
            search={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Category"
            size="large"
            suffix={<SearchOutlined />}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[16, 24]}>
            {!categories?.length ? (
              <Col {...FULL_ROW}>
                <h4>No Category found with "{search}"</h4>
              </Col>
            ) : (
              categories?.map((item, indx) => (
                <Col {...FOUR_ITEMS_ROW} key={indx}>
                  <CategoryCard item={item} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default AllCategoriesUI
