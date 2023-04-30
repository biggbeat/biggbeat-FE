import { Spin } from 'antd'
import variables from '../styles/variables.module.scss'

export default function Loading() {
  return (
    <div className="loader-wrapper">
      <Spin size="large" />
    </div>
  )
}
