import Assets from '@/Assets'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import ProductCard from '../product-card/product-card'
import style from './styles.module.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const settingsSelectCategory = {
  dots: false,
  infinite: false,
  speed: 500,

  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}
const Products = [
  {
    url: Assets.ShoeImage1,
  },
  {
    url: Assets.ShoeImage2,
  },
  {
    url: Assets.ShoeImage3,
  },
  {
    url: Assets.ShoeImage4,
  },
]
const ProductSection = ({ sections }) => {
  return (
    <div className={`page_wrapper ${style.sectionWrapper}`}>
      <Row gutter={[24, 16]} justify={'start'}>
        <Col>
          <h3 className="text-animate">Shop by Categories</h3>
        </Col>
      </Row>

      <Row gutter={[16, 16]} align="middle" justify={'center'}>
        {/* <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          className={style.titleWrapper}
          >
            <Slider
              {...settingsSelectCategory}
              className={style.selectCategorySlider}
            >
              <div className={style.categoryTitlerWrapper}>
                <div>Sneakers</div>
              </div>
              <div className={style.categoryTitlerWrapper}>
                <div>Leather</div>
              </div>
              <div className={style.categoryTitlerWrapper}>
                <div>Sandals</div>
              </div>
              <div className={style.categoryTitlerWrapper}>
                <div>Joggers</div>
              </div>
              <div className={style.categoryTitlerWrapper}>
                <div>Women</div>
              </div>
            </Slider>
          </Col> */}

        <Col span={24}>
          <Slider {...settings} autoplay className={style.productSlider}>
            {Products.map((item) => (
              <ProductCard item={item} />
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  )
}
export default ProductSection

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Button
      type="link"
      shape="circle"
      size="small"
      icon={<ArrowRightOutlined />}
      onClick={onClick}
    />
  )
}
function PrevArrow(props) {
  const { className, style, onClick } = props
  console.log({ props })
  return (
    <Button
      type="link"
      shape="circle"
      size="small"
      icon={<ArrowLeftOutlined />}
      onClick={onClick}
    />
  )
}
