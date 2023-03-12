import {
  CloseCircleFilled,
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Badge, Button, Col, Drawer, Row } from 'antd'
import style from './styles.module.scss'
import { Jost } from '@next/font/google'
import variables from '@/styles/variables.module.scss'
const jost = Jost({ subsets: ['latin'] })
const SideBar = ({ open, handleClose }) => {
  return (
    <Drawer
      bodyStyle={{ padding: '10px 5px 5px 5px' }}
      closable={true}
      headerStyle={{
        padding: '10px',
        border: '0px',
      }}
      closeIcon={<CloseCircleFilled style={{ color: variables.primaryText }} />}
      width={
        window.innerWidth > 1200
          ? 800
          : window.innerWidth > 500
          ? 300
          : window.innerWidth > 300
          ? 250
          : window.innerWidth > 200
          ? 200
          : 'auto'
      }
      placement="left"
      onClose={handleClose}
      className={`${style.customBody} ${jost.className}`}
      open={open}
    >
      <Row
        gutter={[
          { sm: 16, xs: 4 },
          { sm: 16, xs: 4 },
        ]}
      >
        <Col span={12}>
          <Button
            className={style.btnCss}
            type="primary"
            icon={<ShoppingCartOutlined />}
          >
            Cart
          </Button>
        </Col>
        <Col span={12}>
          <Button className={style.btnCss} icon={<UserOutlined />}>
            Login
          </Button>
        </Col>
        <Col span={24}>
          <Button className={style.btnCss} icon={<HomeOutlined />}>
            Home
          </Button>
        </Col>
        <Col span={24}>
          <Button className={style.btnCss} icon={<ShopOutlined />}>
            Shop
          </Button>
        </Col>
        <Col span={24}>
          <Button className={style.btnCss}>Featured</Button>
        </Col>
        <Col span={24}>
          <Button className={style.btnCss} icon={<UserAddOutlined />}>
            Register
          </Button>
        </Col>
      </Row>
    </Drawer>
  )
}
export default SideBar
