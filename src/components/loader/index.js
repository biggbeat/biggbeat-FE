import { Col, Row, Spin } from 'antd'

export default function Loader() {
  return (
    <Row style={{ width: '100%' }} justify="center" align={'middle'}>
      <Col style={{ height: '400px', display: 'flex', alignItems: 'center' }}>
        <Spin />
      </Col>
    </Row>
  )
}
