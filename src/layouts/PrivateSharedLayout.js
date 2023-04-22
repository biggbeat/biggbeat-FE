import { Header } from '@/components'
import { MainContext } from '@/context/MainContext'
import { Jost } from '@next/font/google'
import { useContext } from 'react'
import style from './styles.module.scss'
const jost = Jost({ subsets: ['latin'] })
export const PrivateSharedLayout = ({ children }) => {
  const { MainState, dispatch } = useContext(MainContext)

  return (
    <div className={`${jost.className} ${style.bgBody} wrapper`}>
      <Header />
      <main>{children}</main>
      <footer>I'm a 30px tall footer</footer>
    </div>
  )
}
