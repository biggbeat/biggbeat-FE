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
import { useRouter } from 'next/router'
import { SINGLE_CATEGORY_ROUTE } from '@/constants'
import Assets from '@/Assets'
const ProductCard = ({ item }) => {
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()

  const handleRoute = (url) => {
    router.push(url)
  }

  return (
    <div
      className={style.productCardWrapper}
      onClick={() => handleRoute(SINGLE_CATEGORY_ROUTE)}
    >
      <Row gutter={[24, 5]} justify="space-between">
        <Col span={24}>
          <Row>
            <Col span={24} className={style.prodImageWrapper}>
              {/* {item?.images?.length ? ( */}
              <Image
                fill
                className={style.prodImage}
                src={item?.images[0]?.webImage || Assets.ShoeImage1}
              />
              {/* )} */}
              <div className={style.iconDiv}>
                <HeartOutlined className={style.icon} />
                <ShoppingCartOutlined className={style.icon} />
                <EyeOutlined className={style.icon} />
              </div>
            </Col>

            <Col span={24} className={style.infoDiv}>
              <h5 className={style.title}>{item?.productTitle}</h5>
              <div class={`${style.priceBox} ${style.a}`}>
                <span className={style.newPrice}>
                  <span class="money" data-currency-usd="$50.00">
                    ${item?.price || '0'}
                  </span>
                </span>
                <span className={style.oldPrice}>
                  <span class="money" data-currency-usd="$70.00">
                    ${item?.discountedPrice || '0'}
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
    </div>
  )
}
export default ProductCard
