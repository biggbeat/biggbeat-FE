import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'
import SliderImage from 'react-zoom-slider'
import { Button, Col, Image, Row } from 'antd'
import styles from '@/styles/Product.module.scss'
import { Breadcrumb } from 'antd'
import StarRatings from 'react-star-ratings'
import Assets from '@/Assets'
import * as NextImage from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import {
  BRAND_NAME,
  FALLBACK_IMAGE,
  FULL_ROW,
  GET_HOME_BANNER_URL,
  GET_PRODUCT_BY_SLUG,
} from '@/constants'
import { Breadcrumbs } from '@/components'
import { request } from '@/actions'

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
    ...(props?.product?.images?.map((item, indx) => {
      return {
        image: item?.webImage,
        text: `image${indx + 1}`,
      }
    }) ?? []),
  ]

  // const data = [
  //   {
  //     image:
  //       'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
  //     text: 'img1',
  //   },
  //   // {
  //   //   image:
  //   //     'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
  //   //   text: 'img2',
  //   // },
  //   // {
  //   //   image:
  //   //     'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
  //   //   text: 'img3',
  //   // },
  // ]

  useEffect(() => {
    console.log('query : ', props)
  }, [])

  const onChangeRating = (rating) => {
    console.log('rating  : ', rating)
  }
  const product = {
    ...(props?.product ?? {}),
  }
  return (
    <>
      <Head>
        <title>{BRAND_NAME}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12 my-2">
            {/* <Breadcrumb
              className={styles.breadcrumb}
              separator=">"
              routes={breadcrumbs}
            /> */}

            <Breadcrumbs />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-7">
            {/* <SliderImage
              data={data}
              // width="500px"

              showDescription={true}
              direction="right"
            /> */}{' '}
            <Row justify={'center'}>
              <Col>
                <div className={styles.prodImageWrapper}>
                  <Image
                    className={styles.prodImage}
                    height={'100%'}
                    src={data[0]?.image}
                    fallback={FALLBACK_IMAGE}
                  />
                </div>
              </Col>
              <Col {...FULL_ROW}>
                <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                >
                  <div>
                    {[...data, ...data]?.map((images) => (
                      <span>
                        <Image
                          width={50}
                          src={images?.image}
                          fallback={FALLBACK_IMAGE}
                        />
                      </span>
                    ))}
                  </div>
                </Image.PreviewGroup>
              </Col>
            </Row>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className={`${styles.productTitle} mb-2`}>
              {product?.productTitle}
            </h2>
            <h1 className={`${styles.productDesc} mb-2`}>
              {product?.productDesc}
            </h1>
            <div className={`${styles.starContainer}`}>
              <StarRatings
                starDimension="20px"
                starSpacing="2px"
                isSelectable={false}
                rating={Number(product?.rating)}
                starRatedColor="yellow"
                // changeRating={onChangeRating}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div className={`${styles.reviewBox} text-black `}>
              <a className={`${styles.reviewBox} text-black`}>5 Reviews</a>
            </div>
            <div className={`${styles.priceContainer}`}>
              <del>Rs {product?.price}</del>
              <span className={`${styles.price}`}>
                {product?.discountedPrice}
              </span>
              <span className={`${styles.percentage}`}>
                {` ( - ${product?.percentageOff})`}
              </span>
            </div>
            <div className={styles.saleContainer}>
              <p className={styles.p}>
                Sale is
                <strong>&nbsp;Live</strong>{' '}
                <NextImage src={Assets.RedBlinkImage} width={17} height={17} />
              </p>
            </div>
            <div className={styles.attributeContainer}>
              <p className={styles.attribute}>More Colors</p>
              <div>
                {data.length &&
                  data.map((m) => (
                    // <Link href={m.image}>
                    <Image
                      src={m.image}
                      // className={styles.imageBox}
                      width={90}
                      height={60}
                    />
                    // </Link>
                  ))}
              </div>
              {product?.attribute?.map((item) => (
                <>
                  <p className={`${styles.attribute} mt-4`}>
                    Select {item?.parentAttribute}
                  </p>
                  <div>
                    {item?.childAttribute?.map((childItem) => (
                      <p className={`${styles.sizes}`}>{childItem?.title}</p>
                    ))}
                  </div>
                </>
              ))}
            </div>
            <div className={styles.checkoutContainer}>
              <div className={`${styles.checkoutBtnDiv}`}>
                <button className={styles.checkoutBtn}>Add to Bag</button>
              </div>
              <div className={`${styles.wishlistContainer}`}>
                <div className="wishlist-container">
                  {' '}
                  <span data-v-0508c599="">WISHLIST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category

export async function getServerSideProps(context) {
  let slug = getSlug(context.query.slug)

  const product = await request({ apiurl: GET_PRODUCT_BY_SLUG, data: { slug } })

  console.log({ product })
  return {
    props: {
      product: product?.success ? product?.data?.data : {},
    },
  }
}
