import { wrapper } from '../redux/store'
import '../styles/globals.scss'

function WrappedApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
