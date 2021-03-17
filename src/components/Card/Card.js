import styles from './Card.module.scss'
import Link from 'next/link'
import Rating from '@/components/Rating'

const Card = ({ product }) => {
  return (
    <div className={styles.card__item}>
      <img
        className={styles.card__item_img}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.card__item_content}>
        <div className={styles.card__item_title}>
          <Link href={`/products/${product.id}`}>
            {product.title.length >= 40
              ? `${product.title.substring(0, 40)} ...`
              : product.title}
          </Link>
        </div>
        <div className={styles.card__item_rating}>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
        <div className={styles.card__item_price}>{`$${product.price}`}</div>
        <div className={styles.card__item_category}>{product.category}</div>
      </div>
    </div>
  )
}

export default Card
