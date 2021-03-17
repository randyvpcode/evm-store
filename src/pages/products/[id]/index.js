import React, { useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import ProductList from '@/components/ProductList'
import { wrapper } from '@/redux/store'
import { getListProductById } from '@/redux/actions/products.action'
import Detail from '@/components/Detail/Detail'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'

const Product = (props) => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    props.getListProductById(id)
  }, [])

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
        <Navbar />
        <Grid>
          <Detail product={props.product} />
        </Grid>
      </Main>

      <Footer />
    </Container>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getListProductById())
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getListProductById: bindActionCreators(getListProductById, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productsReducer.product
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
