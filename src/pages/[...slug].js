import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSlug } from '@/services/commosService'
import SliderImage from 'react-zoom-slider'
import { Button, Col, Row } from 'antd'
import styles from '@/styles/Product.module.scss'
import { Breadcrumb, Rate, Progress, Input, Tooltip } from 'antd'
const { TextArea } = Input
import StarRatings from 'react-star-ratings'
import Assets from '@/Assets'
import Image from 'next/image'
import Link from 'next/link'
import {
  StarOutlined,
  InfoCircleOutlined,
  UserOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { Collapse } from 'antd'
const { Panel } = Collapse
// import "../Assets/images/product/delivery-time.svg"

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

  const rating = {
    totalCount: 80,
    data: [
      {
        rate: 5,
        count: 70,
      },
      {
        rate: 4,
        count: 5,
      },
      {
        rate: 3,
        count: 3,
      },
      {
        rate: 2,
        count: 1,
      },
      {
        rate: 1,
        count: 1,
      },
    ],
  }

  const onChangeRating = (rating) => {
    console.log('rating  : ', rating)
  }
  const onChangeProductPanel = (rating) => {
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
            {/* <StarRatings
              starDimension="20px"
              starSpacing="2px"
              isSelectable={false}
              rating={5}
              starRatedColor="yellow"
              // changeRating={onChangeRating}
              numberOfStars={6}
              name="rating"
            /> */}
            <Rate disabled defaultValue={5} className={styles.star} />
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
          <div className={`${styles.shipContainer}`}>
            <div className={styles.shipImg}>
              <Image src={Assets.DeliveryTime} />
            </div>
            <div className={styles.shipDetail}>
              <h5>Delivery Time:</h5>
              <div>
                Lahore, Rawalpindi, Islamabad: 1-2 days
                <br />
                Other cities: 1-4 days
              </div>
            </div>
          </div>
          <div className={styles.descContainer}>
            <Collapse
              defaultActiveKey={['1']}
              onChange={onChangeProductPanel}
              expandIconPosition={'end'}
            >
              <Panel header="PRODUCT DESCRIPTION" key="1">
                <div className={styles.description}>
                  <p className={styles.head}>
                    <strong>Material:</strong> Leather
                  </p>
                  <p className={styles.head}>
                    <strong>Sole:</strong> Molded
                  </p>
                </div>
              </Panel>
            </Collapse>
            {/* <div className={styles.heading}>PRODUCT DESCRIPTION</div>
            <div className={styles.description}>
              <p className={styles.head}>
                <strong>Material:</strong> Leather
              </p>
              <p className={styles.head}>
                <strong>Sole:</strong> Molded
              </p>
            </div> */}
          </div>
          <div className={`${styles.ratingContainer} row`}>
            <div className="col-12">
              <h5 className={styles.heading}>Rating</h5>
            </div>
            <div className="col-4">
              <div className={styles.rate}>
                <h1>
                  3.0  <Rate
                        disabled
                        defaultValue={1}
                        count={1}
                        className={styles.mainRatingIcon}
                      />
                  
                  {/* <StarOutlined className={styles.starIcon} /> */}
                </h1>
                <p>50 verified customer</p>
              </div>
            </div>
            <div className="col-8">
              {rating.data.length ? (
                rating.data.map((m) => (
                  <div className={styles.review}>
                    <div className={styles.left}>
                      <text>{m.rate}</text>
                      <Rate
                        disabled
                        defaultValue={1}
                        count={1}
                        className={styles.starIcon}
                      />
                    </div>
                    <div className={styles.center}>
                      {/* <progress
                        value={m.count}
                        max={rating.totalCount}
                      ></progress> */}
                      <Progress
                        strokeColor="green"
                        s
                        strokeWidth={5}
                        size={'small'}
                        percent={m.count}
                        showInfo={false}
                      />
                    </div>
                    <div className={styles.right}>{m.count}</div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={styles.reviewContainer}>
            <h1>Customer Reviews ({rating.totalCount})</h1>
            <div className={styles.reviewRapper}>
              <div className={styles.reviewStar}>
                <p>5</p>
                <div>
                  <Rate
                    style={{ color: '#D5D5DA' }}
                    disabled
                    defaultValue={1}
                    count={1}
                    className={styles.starIcon}
                  />
                </div>
              </div>
              <div className={styles.customerSaid}>
                <p>This is dummy review</p>
                <div>Hamza | Mar 30,2023 at 2:30:09 PM</div>
              </div>
            </div>
            <div className={styles.reviewRapper}>
              <div className={styles.reviewStar}>
                <p>5</p>
                <div>
                  <Rate
                    style={{ color: '#D5D5DA' }}
                    disabled
                    defaultValue={1}
                    count={1}
                    className={styles.starIcon}
                  />
                </div>
              </div>
              <div className={styles.customerSaid}>
                <p>This is dummy review</p>
                <div>Hamza | Mar 30,2023 at 2:30:09 PM</div>
              </div>
            </div>
            <div className={styles.viewAll}>
              <Link href={'/review/safasf454asfasf'}>
                <p>View all {rating.totalCount} reviews</p>
              </Link>
            </div>
            <div className={styles.reviewBtnBox}>
              {/* <button>
                <Image src={Assets.FeedbackImage} width={20} height={20} />
                <text className="pl-2">Add a Review</text>
              </button> */}
              <div className={styles.addReviewTextArea}>
                <TextArea placeholder="Write a review.."  allowClear />
              </div>
              <div className={styles.reviewIcon}>
                <SendOutlined
                  style={{
                    color: '#04aa6d',
                  }}
                />
              </div>
              {/* <Input
                placeholder="Write your review.."
                className={styles.addReview}
                prefix={<UserOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Extra information">
                    <SendOutlined
                      style={{
                        color: '#04aa6d',
                      }}
                    />
                  </Tooltip>
                }
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <h1>asfasfasfas</h1>
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
