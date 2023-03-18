import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'
import SliderImage from 'react-zoom-slider'
import { Button, Col, Row } from 'antd'
import styles from '@/styles/Product.module.scss'
import { Breadcrumb } from 'antd'
import StarRatings from 'react-star-ratings'

const Category = (props) => {
  const router = useRouter()

  const breadcrumbs = [
    {
      href: 'home',
      breadcrumbName: 'Home',
    },
    {
      href: '/user',
      breadcrumbName: 'User',
      children: [
        {
          path: '/user1',
          breadcrumbName: 'User1',
        },
        {
          path: '/user2',
          breadcrumbName: 'User2',
        },
      ],
    },
  ]

  const data = [
    {
      image:
        'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
      text: 'img1',
    },
    {
      image:
        'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
      text: 'img2',
    },
    {
      image:
        'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
      text: 'img3',
    },
  ]

  useEffect(() => {
    console.log('query : ', props)
  }, [])

  const onChangeRating = (rating) => {
    console.log('rating  : ', rating)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-2">
          <Breadcrumb
            className={styles.breadcrumb}
            separator=">"
            routes={breadcrumbs}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <SliderImage
            data={data}
            // width="500px"
            showDescription={true}
            direction="right"
          />
        </div>
        <div className="col-12 col-lg-5">
          <h2 className={`${styles.productTitle} mb-2`}>Miles</h2>
          <h1 className={`${styles.productDesc} mb-2`}>Miles Women Pink Sports Shoes</h1>
          <StarRatings
            starDimension="25px"
            starSpacing='2px'
            isSelectable={false}
            rating={5}
            starRatedColor="yellow"
            // changeRating={onChangeRating}
            numberOfStars={6}
            name="rating"
          />
        </div>
      </div>
    </div>
  )
}

export default Category

export async function getServerSideProps(context) {
  let slug = getSlug(context.query.slug)
  return {
    props: {
      categoryName: slug,
    },
  }
}
