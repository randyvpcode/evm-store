import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import ProductList from '@/components/ProductList'
import { wrapper } from '@/redux/store'
import { getListProduct } from '@/redux/actions/products.action'

const Products = (props) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"></meta>
      </Head>

      <Main>
        <Grid>
          <ProductList products={props.products} />
        </Grid>
      </Main>

      <Footer />
    </Container>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getListProduct())
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getListProduct: bindActionCreators(getListProduct, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
