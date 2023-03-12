import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import style from './styles.module.scss'
const ProductCard = ({ item }) => {
  return (
    <div className={style.productCardWrapper}>
      <Row gutter={[24, 24]} justify="space-between">
        <Col span={24}>
          <Row>
            <Col span={24} className={style.prodImageWrapper}>
              <Image fill className={style.prodImage} src={item?.url} />
            </Col>

            <Col span={24}>
              <h5>Sneaker</h5>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button block type="primary">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </div>
  )
}
export default ProductCard
