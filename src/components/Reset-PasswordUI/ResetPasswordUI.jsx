import { THREE_ITEM_ROWS, BRAND_NAME, validateMsgRequired } from '@/constants'
import { Button, Col, Form, Input, Row } from 'antd'
import styles from './styles.module.scss'
const ResetPasswordUI = ({ loading, form, handleSubmit }) => {
  return (
    <div className={styles.LoginPageUI}>
      <Row justify={'center'} className={styles.rowwrapper}>
        <Col {...THREE_ITEM_ROWS}>
          <div className={styles.loginFieldsWrapper}>
            <h4 className={styles.brandtitle}>{BRAND_NAME}</h4>
            <h6 className={styles.sentOtptitle}>Reset your Password </h6>
            <Form
              validateTrigger="onSubmit"
              form={form}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('New Password'),
                      },
                    ]}
                  >
                    <Input.Password placeholder="New Password" size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="confirm_password"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Confirm Password'),
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                          }
                          return Promise.reject(
                            new Error(
                              "Confirm password doesn't match with new password"
                            )
                          )
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm Password"
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
                    Reset Password
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
export default ResetPasswordUI
