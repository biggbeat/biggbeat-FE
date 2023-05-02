import { Button, Checkbox, Col, Form, Input, Radio, Row, Space } from 'antd'
import { RiVisaFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import variables from '@/styles/variables.module.scss'

import styles from './styles.module.scss'
const CheckoutPageUI = () => {
  return (
    <div className={styles.checkPageWrapper}>
      <Form>
        <Row gutter={[16, 16]} justify="center">
          <Col
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className={styles.address}>
              <h6>Delivery Address</h6>
              <h6>New Address</h6>
              <Row className={styles.form_row}>
                <Col span={24}>
                  <label>First Name</label>
                  <Form.Item>
                    <Input size="large" placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>Last Name</label>

                  <Form.Item>
                    <Input placeholder="Last Name" size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>Cell Number</label>

                  <Form.Item>
                    <Input placeholder="Cell Number" size="large" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <label>Complete Address {`( H #, ST # & Landmark )`}</label>

                  <Form.Item>
                    <Input placeholder="Address" size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>City</label>

                  <Form.Item>
                    <Input placeholder="City" size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Checkbox>Mark as default address</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className={styles.address}>
              <h6>Payment Type</h6>
              <Form.Item>
                <Radio.Group
                  buttonStyle="solid"
                  className={styles.radioButtonWrapper}
                >
                  <Radio
                    value={'card'}
                    className={`${styles.options} ${styles.optionsWithBorder}`}
                  >
                    <div>
                      <RiVisaFill size={48} color="#1a0dab" />
                      {/* <FaCcVisa size={40} color="#1a0dab" /> */}
                      <h6>Credit/Debit Card</h6>
                    </div>
                  </Radio>
                  <Radio value={'cod'} className={styles.options}>
                    <div>
                      <TbTruckDelivery size={48} color={variables.bgRed} />
                      <h6>Cash on Delivery</h6>
                    </div>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </Col>
          <Col
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          ></Col>
        </Row>
      </Form>
    </div>
  )
}
export default CheckoutPageUI
