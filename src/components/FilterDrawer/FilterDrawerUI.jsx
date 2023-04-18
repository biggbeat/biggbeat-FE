import { CloseCircleFilled, CloseCircleOutlined } from '@ant-design/icons'
import variables from '@/styles/variables.module.scss'
import {
  CATEGORY_SORT_OPTIONS,
  FILTER_BRAND_OPTIONS,
  FILTER_SIZE_OPTIONS,
} from '@/constants'
import styles from './styles.module.scss'
import { Button, Col, Drawer, Row, Select, Space } from 'antd'

const FilterDrawerUI = ({
  //states
  open,
  sizeFilter,
  brandFilter,
  //func
  handleBrandFilter,
  handleSizeFilter,
  handleDrawer,
}) => {
  return (
    <Drawer
      closeIcon={
        <CloseCircleFilled
          style={{ fontSize: 16, color: variables.primaryText }}
        />
      }
      width={
        window.innerWidth > 1200
          ? 500
          : window.innerWidth > 500
          ? 300
          : window.innerWidth > 300
          ? 250
          : window.innerWidth > 200
          ? 200
          : 'auto'
      }
      title="Filter By"
      placement={'right'}
      onClose={() => handleDrawer(false)}
      open={open}
      footer={
        <Button block type="primary">
          Apply Filter
        </Button>
      }
    >
      <div className={styles.filterDrawerWrapper}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <h6>Size</h6>
            <Select
              mode="multiple"
              allowClear
              value={sizeFilter}
              className="select-field"
              placeholder="Please select Sizes"
              onChange={handleSizeFilter}
              options={FILTER_SIZE_OPTIONS}
            />
          </Col>
          {/* <Col span={24}>
            <h6>Brand</h6>
            <Select
              mode="multiple"
              allowClear
              className="select-field"
              onChange={handleBrandFilter}
              value={brandFilter}
              placeholder="Please select Brand"
              options={FILTER_BRAND_OPTIONS}
            />
          </Col> */}
        </Row>
      </div>
    </Drawer>
  )
}
export default FilterDrawerUI
