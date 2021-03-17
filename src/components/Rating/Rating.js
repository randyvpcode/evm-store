import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Rating.module.scss'
import classNames from 'classnames'

export default function Rating({ active }) {
  return (
    <FontAwesomeIcon
      className={
        active ? classNames(styles.rating, styles.active) : styles.rating
      }
      icon={faStar}
    />
  )
}
