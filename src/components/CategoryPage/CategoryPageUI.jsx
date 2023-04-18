import {
  CATEGORY_SORT_OPTIONS,
  FOUR_ITEMS_ROW,
  THREE_ITEM_ROWS_2,
} from '@/constants'
import { Button, Col, Popover, Row, Select, Slider } from 'antd'
import Breadcrumbs from '../BreadCrumbs/bread-crumb'
import ProductCard from '../product-card/product-card'
import styles from './styles.module.scss'

const CategoryPageUI = ({
  //states
  popOver,
  openDrawer,
  rangeFilter,
  sortByFilter,
  categoryDetails,
  products,
  //functions
  handleDrawer,
  handleFilterRange,
  setPopover,
  handleSortFilter,
}) => {
  const popOverPriceRange = () => {
    return (
      <div style={{ width: '200px' }}>
        <Slider
          tooltip={{ open: popOver }}
          range={{
            draggableTrack: true,
          }}
          onAfterChange={handleFilterRange}
          defaultValue={rangeFilter}
          step={500}
          min={1000}
          max={10000}
        />
      </div>
    )
  }
  return (
    <div className={styles.categoryPageUI}>
      <Row gutter={[16, 24]} className={styles.categoryRow} justify="center">
        <Col span={24}>
          <Breadcrumbs />
        </Col>

        <Col span={24}>
          <h4 className={styles.categorytitle}>
            {categoryDetails?.categoryTitle}
          </h4>
        </Col>
        <Col {...THREE_ITEM_ROWS_2}>
          <Select
            placeholder="Sort By"
            className="select-field"
            size="large"
            sortByFilter={sortByFilter}
            onChange={handleSortFilter}
            options={CATEGORY_SORT_OPTIONS}
          />
        </Col>
        <Col {...THREE_ITEM_ROWS_2}>
          <Popover
            placement="bottom"
            content={popOverPriceRange}
            trigger="click"
            onOpenChange={(val) => {
              setPopover(val)
            }}
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
          >
            <Button size="large" block>
              Price Range
            </Button>
          </Popover>
        </Col>
        <Col {...THREE_ITEM_ROWS_2}>
          <Button size="large" block onClick={() => handleDrawer(!openDrawer)}>
            Filter By
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 24]} className={styles.categoryRow}>
        {products?.map((item, index) => (
          <Col {...FOUR_ITEMS_ROW}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CategoryPageUI
