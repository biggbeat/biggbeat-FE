import { Spin } from 'antd'

export default function LoadingPage() {
  return (
    <div className="loader-wrapper">
      <Spin size="large" />
    </div>
  )
}
