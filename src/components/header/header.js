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
import { Popover } from 'antd'
const Header = () => {
  const [open, setopen] = useState(false)

  const [openLogin, setopenLogin] = useState(false)

  const handleClose = () => {
    setopen(!open)
  }

  const handleLogin = () => {
    setopenLogin(!openLogin)
  }

  const handlePopoverContent = () => {
    return (
      <div className={style.popoverContent}>
        <div>
          <b>Sign Up</b>
        </div>
        <div>
          <b>Login</b>
        </div>
      </div>
    )
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
              <Popover
                content={handlePopoverContent}
                trigger="click"
                open={openLogin}
                onOpenChange={handleLogin}
              >
                <UserOutlined className={style.navIcon} onClick={handleLogin} />
              </Popover>
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

      {/* <LoginModal handleCancel={handleLogin} open={openLogin} /> */}
    </>
  )
}
export default Header
