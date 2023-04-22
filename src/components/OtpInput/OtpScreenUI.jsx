import {
  THREE_ITEM_ROWS,
  BRAND_NAME,
  validateMsgRequired,
  validateMaxLengthMessage,
  validateMinLengthMessage,
} from '@/constants'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd'
import styles from './styles.module.scss'
const OTPScreenUI = ({ loading, form, handleSubmit }) => {
  return (
    <div className={styles.LoginPageUI}>
      <Row justify={'center'} className={styles.rowwrapper}>
        <Col {...THREE_ITEM_ROWS}>
          <div className={styles.loginFieldsWrapper}>
            <h4 className={styles.brandtitle}>{BRAND_NAME}</h4>
            <h6 className={styles.sentOtptitle}>
              Otp code sent to your email!
            </h6>
            <Form
              name="Login"
              form={form}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="otp"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Otp code'),
                      },
                      {
                        min: 4,
                        message: validateMinLengthMessage(4),
                      },
                      {
                        max: 4,
                        message: validateMaxLengthMessage(4),
                      },
                    ]}
                  >
                    <Input
                      controls={false}
                      type="number"
                      suffix={null}
                      placeholder="OTP Code"
                      size="large"
                    />
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
                    Verify
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
export default OTPScreenUI