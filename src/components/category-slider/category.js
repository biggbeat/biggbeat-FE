import Assets from '@/Assets'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Slider from 'react-slick'
import style from './styles.module.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}
const CategorySectionSlider = () => {
  return (
    <div className={`page_wrapper ${style.categorySliderWrapper}`}>
      <Row gutter={[16, 16]} justify="space-between">
        <Col className={style.titleWrapper}>
          <h3 className={`text-animate`}>Shop by Categories</h3>
        </Col>
        <Col
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 8 }}
          xs={{ span: 0 }}
        >
          <span className={style.viewBtnWrapper}>
            <Button
              type="primary"
              className={`${style.redBg} ${style.textWhite}`}
            >
              View all
            </Button>
          </span>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Slider {...settings} autoplay className={style.selectCategorySlider}>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage1}
              />
              <h4>Leather Shoes</h4>
            </div>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage2}
              />
              <h4>Sports Shoes</h4>
            </div>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage3}
              />
              <h4>Sneakers</h4>
            </div>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage4}
              />
              <h4>Sandals</h4>
            </div>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage1}
              />
              <h4>Kids</h4>
            </div>
            <div className={style.imageSliderWrapper}>
              <Image
                fill
                className={style.categoryImage}
                src={Assets.ShoeImage2}
              />
              <h4>Women sandals</h4>
            </div>
          </Slider>
        </Col>
      </Row>
    </div>
  )
}
export default CategorySectionSlider

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
