import { DUMMY_IMAGE } from '@/constants'
import { Card, Image } from 'antd'
import styles from './styles.module.scss'
const CategoryCardUI = ({ image, title, handleClick }) => {
  return (
    <Card
      className={styles.cardWrapper}
      style={{ height: 400 }}
      hoverable
      onClick={handleClick}
      cover={
        // <span className={styles.coverImageWrapper}>
        <Image
          preview={false}
          alt="example"
          height={300}
          src={image || DUMMY_IMAGE}
        />
        // </span>
      }
    >
      <Card.Meta title={title} />
    </Card>
  )
}
export default CategoryCardUI
