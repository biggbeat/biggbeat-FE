import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'
import SliderImage from 'react-zoom-slider'
import { Button, Col, Row } from 'antd'
import styles from '@/styles/Product.module.scss'
import { Breadcrumb } from 'antd'
import StarRatings from 'react-star-ratings'
import Assets from '@/Assets'
import Image from 'next/image'
import Link from 'next/link'

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
          <h1 className={`${styles.productDesc} mb-2`}>
            Miles Women Pink Sports Shoes
          </h1>
          <div className={`${styles.starContainer}`}>
            <StarRatings
              starDimension="20px"
              starSpacing="2px"
              isSelectable={false}
              rating={5}
              starRatedColor="yellow"
              // changeRating={onChangeRating}
              numberOfStars={6}
              name="rating"
            />
          </div>
          <div className={`${styles.reviewBox} text-black `}>
            <a className={`${styles.reviewBox} text-black`}>5 Reviews</a>
          </div>
          <div className={`${styles.priceContainer}`}>
            <del>Rs 2845</del>
            <span className={`${styles.price}`}>1799</span>
            <span className={`${styles.percentage}`}>(-30%)</span>
          </div>
          <div className={styles.saleContainer}>
            <p className={styles.p}>
              Sale is
              <strong>&nbsp;Live</strong>{' '}
              <Image src={Assets.RedBlinkImage} width={17} height={17} />
            </p>
          </div>
          <div className={styles.attributeContainer}>
            <p className={styles.attribute}>More Colors</p>
            <div>
              {data.length &&
                data.map((m) => (
                  <Link href={m.image}>
                    <img
                      src={m.image}
                      className={styles.imageBox}
                      width={50}
                      height={50}
                    />
                  </Link>
                ))}
            </div>

            <p className={`${styles.attribute} mt-4`}>Select Size</p>
            <div>
              {/* {data.length &&
                data.map((m) => (
                  <span className={`${styles.sizes}`}>37</span>
                ))} */}

              <p className={`${styles.sizes}`}>37</p>
              <p className={`${styles.sizes} ${styles.inactive}`}>38</p>
              <p className={`${styles.sizes}`}>39</p>
            </div>
          </div>
          <div className={styles.checkoutContainer}>
            <div className={`${styles.checkoutBtnDiv}`}>
              <button className={styles.checkoutBtn}>Add to Bag</button>
            </div>
            <div class={`${styles.wishlistContainer}`}>
              <div class="wishlist-container">
                {' '}
                <span data-v-0508c599="">WISHLIST</span>
              </div>
            </div>
          </div>
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
