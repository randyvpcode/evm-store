import Head from 'next/head'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Navbar from '@/components/Navbar'
import styles from './index.module.scss'

export default function Home() {
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
          <div className={styles.container}>
            <h2>Welcome to EVM Store</h2>
            <p>Tech Stack : Next.js, Redux, Sass</p>
          </div>
        </Grid>
      </Main>

      <Footer />
    </Container>
  )
}
