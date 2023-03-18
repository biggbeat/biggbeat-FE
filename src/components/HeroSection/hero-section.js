import Assets from '@/Assets'
import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Slider from 'react-slick'
import style from './styles.module.scss'

const HeroSection = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log({ banners })

  return (
    <div className={style.heroWrapper}>
      <Slider fade {...settings} autoplay>
        {banners?.map((banner) => (
          <div className={style.imageSliderWrapper}>
            <Row style={{ width: '100%' }} align="middle">
              <Col span={12}>
                <Image
                  fill
                  className={style.bannerImage}
                  src={banner?.heroImageWeb}
                />
              </Col>
              <Col span={12}>
                <div className={style.bannertitleWrapper}>
                  <Typography.Title level={1}>{banner?.title}</Typography.Title>
                  <h1> {banner?.offerName}</h1>
                  <Typography.Title level={2}>
                    {banner?.subTitle}
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default HeroSection
