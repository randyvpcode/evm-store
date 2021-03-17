import React, { useState } from 'react'
import styles from './Detail.module.scss'
import Rating from '@/components/Rating'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export default function Detail({ product }) {
  const [state, setState] = useState({
    qty: 0
  })
  const handleMin = () => {
    if (state.qty > 0) setState({ ...state, qty: state.qty - 1 })
  }
  const handlePlus = () => {
    setState({ ...state, qty: state.qty + 1 })
  }

  return (
    <>
      <div className={styles.container__detail}>
        <img className={styles.detail__img} src={product.image} />
        <div className={styles.detail__content}>
          <div className={styles.detail__title}>
            <h2>{product.title}</h2>
          </div>
          <div className={styles.detail__rating}>
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating /> (0 Rating)
          </div>
          <div className={styles.detail__price}>{`$${product.price}`}</div>
          <div className={styles.detail__category_wrapper}>
            <div className={styles.detail__category}>{product.category}</div>
          </div>
          <div className={styles.detail__description}>
            {product.description}
          </div>
          <div className={styles.detail__btn_group}>
            <div className={styles.custom_btn}>
              <FontAwesomeIcon className={styles.detail__icon} icon={faHeart} />
              <div>Wishlist</div>
            </div>
            <div className={styles.custom_btn}>
              <FontAwesomeIcon className={styles.detail__icon} icon={faShare} />
              <div>Share</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__recomended_product}>
        <h3 className={styles.sidebar__title}>Amount</h3>
        <div className={styles.btn__group_amount}>
          <div className={styles.btn__amount} onClick={handleMin}>
            -
          </div>
          <div className={styles.btn__amount_text}>{state.qty}</div>
          <div className={styles.btn__amount} onClick={handlePlus}>
            +
          </div>
        </div>
        <h3 className={styles.sidebar__title}>Total</h3>
        <h3 className={styles.sidebar__price}>
          ${product.price} <span>$10</span>
        </h3>
        <div className={classNames(styles.btn__secondary, styles.btn__action)}>
          Add To Cart
        </div>
        <div className={classNames(styles.btn__primary, styles.btn__action)}>
          Buy Now
        </div>
      </div>
    </>
  )
}
