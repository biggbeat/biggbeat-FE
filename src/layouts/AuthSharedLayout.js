import { Header } from '@/components'
import { MainContext } from '@/context/MainContext'
import { Jost } from '@next/font/google'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import LoadingPage from '@/components/loading/loading'
import style from './styles.module.scss'

const jost = Jost({ subsets: ['latin'] })
export const AuthSharedLayout = ({ children, loading }) => {
  const { MainState, dispatch } = useContext(MainContext)
  const router = useRouter()

  const user = MainState?.user
  useEffect(() => {
    if (user) {
      // router.push('/')
    }
  }, [user])
  return (
    <div className={`${jost.className} ${style.bgBody} wrapper`}>
      <Header />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <main>{children}</main>
          <footer>I'm a 30px tall footer</footer>
        </>
      )}
    </div>
  )
}
