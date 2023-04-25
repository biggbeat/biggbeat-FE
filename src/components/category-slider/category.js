import Assets from '@/Assets'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Slider from 'react-slick'
import style from './styles.module.scss'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
const CategorySectionSlider = ({
  categories,
  handleSelectedCategory,
  selectedcategory,
}) => {
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
            {categories?.map((item, indx) => (
              <div
                className={style.imageSliderWrapper}
                onClick={() => handleSelectedCategory(item?._id)}
              >
                <Image
                  fill
                  className={style.categoryImage}
                  src={Assets.ShoeImage1}
                />
                <h4>{item?.categoryTitle}</h4>
              </div>
            ))}
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
