import { CloseCircleFilled } from '@ant-design/icons'
import variables from '@/styles/variables.module.scss'
import { Button, Col, Form, Input, Modal, Row } from 'antd'
import style from './styles.module.scss'
import { BRAND_NAME, validateMsgRequired } from '@/constants'
import SignUpModal from '../Signup-modal/signup-modal'
import { useState } from 'react'

const LoginModal = ({
  open = false,
  text = 'dummy text',
  title = 'title    ',
  handleCancel = null,
  loading = false,
  handleSubmit = null,
}) => {
  const [registerOpen, setregisterOpen] = useState(false)
  const handleCloseRegister = () => {
    setregisterOpen(false)
  }
  const handleOpenRegister = () => {
    setregisterOpen(true)
    handleCancel()
  }

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
              <h6>Great to have you back!</h6>
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
              <h6 className={style.forgotText}>Forgot your Password?</h6>
            </Col>
            <Col span={24}>
              <Button block size="large" type="primary" htmlType="submit">
                Login
              </Button>
            </Col>
            <Col span={24}>
              <span className={style.registerNowWrapper}>
                <strong>Don't have an account</strong>
                <Button
                  size="middle"
                  type="link"
                  htmlType="submit"
                  onClick={handleOpenRegister}
                >
                  Register now!
                </Button>
              </span>
            </Col>
          </Row>
        </Form>
      </Modal>
      <SignUpModal open={registerOpen} handleCancel={handleCloseRegister} />
    </>
  )
}
export default LoginModal
