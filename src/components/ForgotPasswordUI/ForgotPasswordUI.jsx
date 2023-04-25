import {
  THREE_ITEM_ROWS,
  BRAND_NAME,
  validateMsgRequired,
  validateMaxLengthMessage,
  validateMinLengthMessage,
  validateNotValidMessage,
} from '@/constants'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd'
import styles from './styles.module.scss'
const ForgotPasswordUI = ({ loading, form, handleSubmit }) => {
  return (
    <div className={styles.LoginPageUI}>
      <Row justify={'center'} className={styles.rowwrapper}>
        <Col {...THREE_ITEM_ROWS}>
          <div className={styles.loginFieldsWrapper}>
            <h4 className={styles.brandtitle}>{BRAND_NAME}</h4>
            <h6 className={styles.sentOtptitle}>
              Please type your email to receive otp!
            </h6>
            <Form
              validateTrigger="onsubmit"
              form={form}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col span={24}>
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

                <Col span={24}>
                  <Button
                    loading={loading}
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Send Otp
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
export default ForgotPasswordUI
