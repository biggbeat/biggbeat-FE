import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import style from './styles.module.scss'
import Link from 'next/link'
import {
  EyeOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const ProductCard = ({ item }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={style.productCardWrapper}>
      <Link href={'/shoes-men'}>
        <Row gutter={[24, 5]} justify="space-between">
          <Col span={24}>
            <Row>
              <Col span={24} className={style.prodImageWrapper}>
                <Image fill className={style.prodImage} src={item?.url} />
                <div className={`${style.iconDiv} `}>
                  <HeartOutlined className={style.icon} />
                  <ShoppingCartOutlined className={style.icon} />
                  <EyeOutlined className={style.icon} />
                </div>
              </Col>

              <Col  span={24} className={style.infoDiv}>
                <h5 className={style.title}>Sneaker</h5>
                <div class={`${style.priceBox} ${style.a}`}>
                  <span className={style.newPrice}>
                    <span class="money" data-currency-usd="$50.00">
                      $50.00
                    </span>
                  </span>
                  <span className={style.oldPrice}>
                    <span class="money" data-currency-usd="$70.00">
                      $70.00
                    </span>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24} className={style.hide}>
            <Button
              block
              type="ghost"
              className={`${style.bgRed} ${style.textWhite}`}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Link>
    </div>
  )
}
export default ProductCard
