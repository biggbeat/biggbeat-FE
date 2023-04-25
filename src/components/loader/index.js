import { Col, Row, Spin } from 'antd'

export default function Loader() {
  return (
    <Row style={{ width: '100%' }} justify="center" align={'middle'}>
      <Col>
        <Spin />
      </Col>
    </Row>
  )
}
