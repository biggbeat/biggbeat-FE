import { Header } from '@/components'
import { Jost } from '@next/font/google'
import style from './styles.module.scss'
const jost = Jost({ subsets: ['latin'] })
export const AuthSharedLayout = ({ children }) => {
  return (
    <div className={`${jost.className} ${style.bgBody} wrapper`}>
      <Header />
      <main>{children}</main>
      <footer>I'm a 30px tall footer</footer>
    </div>
  )
}
