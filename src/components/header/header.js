import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useContext, useState } from 'react'
import { ConfirmationModal, LoginModal, SideBar } from '@/components'
import style from './styles.module.scss'
import { Avatar, Badge, Popover } from 'antd'
import { useRouter } from 'next/router'
import {
  CHECKOUT_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from '@/constants'
import { MainContext } from '@/context/MainContext'
import { LOGOUT_USER } from '@/context/action-types'
const Header = ({ user = null }) => {
  const { MainState, dispatch } = useContext(MainContext)

  const router = useRouter()
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
        <div
          onClick={() => {
            handleRoute(SIGNUP_PAGE_ROUTE.url)
            handleLogin()
          }}
        >
          <b>Sign Up</b>
        </div>
        <div
          onClick={() => {
            handleRoute(LOGIN_PAGE_ROUTE.url)
            handleLogin()
          }}
        >
          <b>Login</b>
        </div>
      </div>
    )
  }

  const handlePopoverUserContent = () => {
    return (
      <div className={style.popoverContent}>
        <div>
          <b>Profile</b>
        </div>
        <div
          onClick={() => {
            handleLogout()
            handleLogin()
          }}
        >
          <b>Logout</b>
        </div>
      </div>
    )
  }
  const handleRoute = (url) => {
    router.push(url)
  }
  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER })
    handleRoute('/')
  }

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.mainHeaderInnerWrapper}>
          <span className={style.brand}>BiggBeats</span>
          <span className={style.navlinks}>
            <span className={style.navTextLinks}>
              <span
                className={style.linkstext}
                onClick={() => handleRoute('/')}
              >
                HOME{' '}
              </span>
              <span className={style.linkstext}>SHOP</span>
              <span className={style.linkstext}>FEATURED</span>
            </span>
            <span className={style.navIconLinks}>
              <SearchOutlined className={style.navIcon} />
              {user ? (
                <Popover
                  content={handlePopoverUserContent}
                  trigger="click"
                  open={openLogin}
                  onOpenChange={handleLogin}
                  className={style.avataricon}
                >
                  <Avatar
                    icon={<UserOutlined />}
                    shape="circle"
                    size={'small'}
                  />
                </Popover>
              ) : (
                <Popover
                  content={handlePopoverContent}
                  trigger="click"
                  open={openLogin}
                  onOpenChange={handleLogin}
                >
                  <UserOutlined
                    className={style.navIcon}
                    onClick={handleLogin}
                  />
                </Popover>
              )}
              <HeartOutlined className={style.navIcon} />
              <Badge dot={MainState?.cart?.length ? true : false} size="small">
                <ShoppingCartOutlined
                  className={style.navIcon}
                  onClick={() => handleRoute(CHECKOUT_PAGE_ROUTE.url)}
                />
              </Badge>
              <MenuOutlined
                className={style.navIconMenuDrawer}
                onClick={handleClose}
              />
            </span>
          </span>
        </div>
      </header>
      <SideBar
        handleRoute={handleRoute}
        open={open}
        handleClose={handleClose}
        user={user}
        handleLogout={handleLogout}
      />
    </>
  )
}
export default Header
