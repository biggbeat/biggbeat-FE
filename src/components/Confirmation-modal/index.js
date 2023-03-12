import { CloseCircleFilled } from '@ant-design/icons'
import variables from '@/styles/variables.module.scss'
import { Modal } from 'antd'
const ConfirmationModal = ({
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
        title={title}
        open={open}
        onOk={handleSubmit}
        confirmLoading={loading}
        onCancel={handleCancel}
        centered
      >
        <p>{text}</p>
      </Modal>
    </>
  )
}
export default ConfirmationModal
