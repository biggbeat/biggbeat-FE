import Assets from '@/Assets'
import Loading from '@/pages/loading'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Spin, Typography } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Loader from '../loader'
import ProductCard from '../product-card/product-card'
import style from './styles.module.scss'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
const CategorySelectionSection = ({ products, selectedcategory }) => {
  console.log({ products })
  const [loader, setloader] = useState(true)
  useEffect(() => {
    setloader(true)
    setTimeout(() => {
      setloader(false)
    }, 1000)
  }, [selectedcategory])
  return (
    <div className={`page_wrapper ${style.categorySelectorWrapper}`}>
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
          {loader ? (
            <Loader />
          ) : (
            <Slider {...settings} autoplay className={style.productSlider}>
              {products?.map((item) => {
                console.log({ item })
                return <ProductCard item={item} />
              })}
            </Slider>
          )}
        </Col>
      </Row>
    </div>
  )
}
export default CategorySelectionSection

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
