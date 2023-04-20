import { THREE_ITEM_ROWS, BRAND_NAME, validateMsgRequired } from '@/constants'
import { Button, Col, Form, Input, Row } from 'antd'
import styles from './styles.module.scss'
const LoginPageUI = ({ form }) => {
  return (
    <div className={styles.LoginPageUI}>
      <Row justify={'center'} className={styles.rowwrapper}>
        <Col {...THREE_ITEM_ROWS}>
          <div className={styles.loginFieldsWrapper}>
            <h4 className={styles.brandtitle}>{BRAND_NAME}</h4>
            <Form
              name="Login"
              form={form}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
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
                    ]}
                  >
                    <Input placeholder="Email or user name" size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: validateMsgRequired('Password'),
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Password"
                      size="large"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <h6 className={styles.forgotText}>Forgot your Password?</h6>
                </Col>
                <Col span={24}>
                  <Button block size="large" type="primary" htmlType="submit">
                    Login
                  </Button>
                </Col>
                <Col span={24}>
                  <span className={styles.registerNowWrapper}>
                    <strong>Don't have an account</strong>
                    <Button
                      size="middle"
                      type="link"
                      htmlType="submit"
                      //   onClick={handleOpenRegister}
                    >
                      Register now!
                    </Button>
                  </span>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default LoginPageUI
