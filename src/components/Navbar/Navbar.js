import styles from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = ({ children, className, ...rest }) => {
  let cardClassName = styles.card

  if (className) {
    cardClassName = `${cardClassName} ${className}`
  }

  return (
    <div {...rest} className={cardClassName}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>EVM Store</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <a href="#" id="menu-icon"></a>
        </ul>
      </nav>{' '}
    </div>
  )
}

export default Navbar
