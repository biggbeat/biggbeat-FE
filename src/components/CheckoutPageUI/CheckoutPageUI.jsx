import {
  Button,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
} from 'antd'
import { RiVisaFill } from 'react-icons/ri'
import { TbTrashOff, TbTruckDelivery } from 'react-icons/tb'
import { BsFillTagFill } from 'react-icons/bs'
import variables from '@/styles/variables.module.scss'

import styles from './styles.module.scss'
import { DUMMY_IMAGE, FULL_ROW } from '@/constants'
import {
  DeleteOutlined,
  MinusCircleOutlined,
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons'
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
            <Row>
              <Col {...FULL_ROW} sm={{ span: 0 }} xs={{ span: 0 }}>
                <Button type="primary" block size="large">
                  {' '}
                  Place Order
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            xl={{ span: 10 }}
            lg={{ span: 10 }}
            md={{ span: 11 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className={styles.address}>
              <h6>Coupons </h6>
              <Row justify={'space-between'}>
                <Col className={styles.applyText_wrapper}>
                  <BsFillTagFill
                    size={24}
                    color={variables.bgRed}
                    // spacing={80}
                  />
                  <h5>Apply Coupons</h5>
                </Col>
                <Col>
                  <Button
                    type="dashed"
                    size="large"
                    className={styles.apply_btn}
                  >
                    Apply
                  </Button>
                </Col>
              </Row>
            </div>
            <div className={styles.address}>
              <Row>
                <Col span={24}>
                  <Row gutter={[0, 16]}>
                    <Col span={24}>
                      <Row
                        gutter={[16, 0]}
                        justify={{ xs: 'center', sm: 'start' }}
                      >
                        <Col>
                          <div>
                            <Image src={DUMMY_IMAGE} width={100} />
                          </div>
                        </Col>
                        <Col>
                          <div className={styles.price_wrapper}>
                            <h5>Rs 2,009</h5>
                            <strike>
                              <h6>Rs 2,009</h6>
                            </strike>
                            <span>{`(-50%)`}</span>
                          </div>
                          <div className={styles.price_wrapper}>
                            <h6>Oxy Men Black Leather Loafer</h6>
                          </div>
                          <div className={styles.price_wrapper}>
                            <Input
                              className={styles.quantity_input}
                              // width={50}
                              maxLength={3}
                              max={100}
                              min={1}
                              controls={false}
                              suffix={
                                <PlusOutlined
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    margin: 0,
                                  }}
                                />
                              }
                              prefix={
                                <MinusOutlined
                                  style={{ fontSize: 12, fontWeight: 'bold' }}
                                />
                              }
                            />
                          </div>
                          <div className={styles.price_wrapper}>
                            <Button type="ghost">
                              <span className={styles.delete_btn_wrapper}>
                                <DeleteOutlined /> <span>Delete</span>
                              </span>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row
                        gutter={[16, 0]}
                        justify={{ xs: 'center', sm: 'start' }}
                      >
                        <Col>
                          <div>
                            <Image src={DUMMY_IMAGE} width={100} />
                          </div>
                        </Col>
                        <Col>
                          <div className={styles.price_wrapper}>
                            <h5>Rs 2,009</h5>
                            <strike>
                              <h6>Rs 2,009</h6>
                            </strike>
                            <span>{`(-50%)`}</span>
                          </div>
                          <div className={styles.price_wrapper}>
                            <h6>Oxy Men Black Leather Loafer</h6>
                          </div>
                          <div className={styles.price_wrapper}>
                            <Input
                              className={styles.quantity_input}
                              // width={50}
                              maxLength={3}
                              max={100}
                              min={1}
                              controls={false}
                              suffix={
                                <PlusOutlined
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    margin: 0,
                                  }}
                                />
                              }
                              prefix={
                                <MinusOutlined
                                  style={{ fontSize: 12, fontWeight: 'bold' }}
                                />
                              }
                            />
                          </div>
                          <div className={styles.price_wrapper}>
                            <Button type="ghost">
                              <span className={styles.delete_btn_wrapper}>
                                <DeleteOutlined /> <span>Delete</span>
                              </span>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[0, 16]}>
                        <Col span={24}>
                          <Row justify={'space-between'}>
                            <Col>
                              <h6>Subtotal</h6>
                            </Col>
                            <Col>
                              <h6>Rs 5,222</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row justify={'space-between'}>
                            <Col>
                              <h6>Subtotal</h6>
                            </Col>
                            <Col>
                              <h6>Rs 5,222</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row justify={'space-between'}>
                            <Col>
                              <h6>Delivery Charges</h6>
                            </Col>
                            <Col>
                              <h6>Rs 150</h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row justify={'space-between'}>
                            <Col>
                              <h6>Total</h6>
                            </Col>
                            <Col>
                              <h5>Rs 5447</h5>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 16]}>
              <Col
                {...FULL_ROW}
                xl={{ span: 0 }}
                md={{ span: 0 }}
                lg={{ span: 0 }}
              >
                <Button type="primary" block size="large">
                  {' '}
                  Place Order
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
export default CheckoutPageUI
