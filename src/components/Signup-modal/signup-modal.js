import { CloseCircleFilled } from '@ant-design/icons'
import variables from '@/styles/variables.module.scss'
import { Button, Col, Form, Input, Modal, Row } from 'antd'
import style from './styles.module.scss'
import { BRAND_NAME, validateMsgRequired } from '@/constants'

const SignUpModal = ({
  open = false,
  text = 'dummy text',
  title = 'title    ',
  handleCancel = null,
  loading = false,
  handleSubmit = null,
}) => {
  return (
    <>
      <Modal
        closeIcon={
          <CloseCircleFilled
            style={{ color: variables.primaryText }}
            size={80}
          />
        }
        title={
          <>
            <span className={style.loginTitleWrapper}>
              <h3>{BRAND_NAME}</h3>
              <h6>Register at {BRAND_NAME}!</h6>
            </span>
          </>
        }
        open={open}
        onCancel={handleCancel}
        centered
        footer={false}
      >
        <Form
          name="Login"
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col span={24}>
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
            <Col span={24}>
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
                <Input placeholder="Email" size="large" />
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
              <Button block size="large" type="primary" htmlType="submit">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}
export default SignUpModal
