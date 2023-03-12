import Assets from '@/Assets'
import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Slider from 'react-slick'
import style from './styles.module.scss'

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={style.heroWrapper}>
      <Slider fade {...settings} autoplay>
        <div className={style.imageSliderWrapper}>
          <Row style={{ width: '100%' }} align="middle">
            <Col span={12}>
              <Image
                fill
                className={style.bannerImage}
                src={Assets.ShoeImage1}
              />
            </Col>
            <Col span={12}>
              <div className={style.bannertitleWrapper}>
                <h1> Up to 30% off</h1>
                <Typography.Title level={2}>
                  The sale will take place this week
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.imageSliderWrapper}>
          <Row style={{ width: '100%' }} align={'middle'}>
            <Col span={12}>
              <Image
                fill
                className={style.bannerImage}
                src={Assets.ShoeImage2}
              />
            </Col>
            <Col span={12}>
              <div className={style.bannertitleWrapper}>
                <h1> Up to 30% off</h1>
                <h2>The sale will take place this week</h2>
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.imageSliderWrapper}>
          <Row style={{ width: '100%' }} align="middle">
            <Col span={12}>
              <Image
                fill
                className={style.bannerImage}
                src={Assets.ShoeImage3}
              />
            </Col>
            <Col span={12}>
              <div className={style.bannertitleWrapper}>
                <h1> Up to 30% off</h1>
                <Typography.Title level={2}>
                  The sale will take place this week
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  )
}
export default HeroSection
