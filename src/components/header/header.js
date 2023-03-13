import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { ConfirmationModal, LoginModal, SideBar } from '@/components'
import style from './styles.module.scss'
const Header = () => {
  const [open, setopen] = useState(false)

  const [openLogin, setopenLogin] = useState(false)

  const handleClose = () => {
    setopen(!open)
  }

  const handleLogin = () => {
    setopenLogin(!openLogin)
  }

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.mainHeaderInnerWrapper}>
          <span className={style.brand}>BiggBeats</span>
          <span className={style.navlinks}>
            <span className={style.navTextLinks}>
              <span className={style.linkstext}>HOME </span>
              <span className={style.linkstext}>SHOP</span>
              <span className={style.linkstext}>FEATURED</span>
            </span>
            <span className={style.navIconLinks}>
              <SearchOutlined className={style.navIcon} />
              <UserOutlined className={style.navIcon} onClick={handleLogin} />
              <HeartOutlined className={style.navIcon} />
              <ShoppingCartOutlined className={style.navIcon} />
              <MenuOutlined
                className={style.navIconMenuDrawer}
                onClick={handleClose}
              />
            </span>
          </span>
        </div>
      </header>
      <SideBar open={open} handleClose={handleClose} />

      <LoginModal handleCancel={handleLogin} open={openLogin} />
    </>
  )
}
export default Header
