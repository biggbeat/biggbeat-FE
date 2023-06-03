import {
  THREE_ITEM_ROWS,
  BRAND_NAME,
  validateMsgRequired,
  FULL_ROW,
  HALF_ROW_FULL_WIDTH_FROM_MD,
  THREE_ITEM_ROWS_2,
  validateNotValidMessage,
} from '@/constants'
import { Button, Col, Form, Input, Row } from 'antd'
import styles from './styles.module.scss'
const SignUpPageUI = ({ form, handleSubmit, loading }) => {
  return (
    <div className={styles.SignUpPageUI}>
      <Row justify={'center'} className={styles.rowwrapper}>
        <Col {...THREE_ITEM_ROWS_2}>
          <div className={styles.loginFieldsWrapper}>
            <h4 className={styles.brandtitle}>{BRAND_NAME}</h4>

            <Form
              name="Login"
              form={form}
              onFinish={handleSubmit}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={[6, 6]}>
                <Col {...HALF_ROW_FULL_WIDTH_FROM_MD}>
                  <Form.Item
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('First name'),
                      },
                    ]}
                  >
                    <Input placeholder="First name" size="large" />
                  </Form.Item>
                </Col>
                <Col {...HALF_ROW_FULL_WIDTH_FROM_MD}>
                  <Form.Item
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Last name'),
                      },
                    ]}
                  >
                    <Input placeholder="Last name" size="large" />
                  </Form.Item>
                </Col>

                <Col {...FULL_ROW}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Email'),
                      },
                      {
                        type: 'email',
                        message: validateNotValidMessage('Email'),
                      },
                    ]}
                  >
                    <Input placeholder="Email" size="large" />
                  </Form.Item>
                </Col>
                <Col {...FULL_ROW}>
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Address'),
                      },
                    ]}
                  >
                    <Input placeholder="Address" size="large" />
                  </Form.Item>
                </Col>
                <Col {...FULL_ROW}>
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Country'),
                      },
                    ]}
                  >
                    <Input placeholder="Country" size="large" />
                  </Form.Item>
                </Col>
                <Col {...FULL_ROW}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Password'),
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Password"
                      size="large"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Button
                    block
                    loading={loading}
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default SignUpPageUI
