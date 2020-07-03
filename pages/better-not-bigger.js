import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  margin: 2rem;
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  h2 {
    font-size: 3rem;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.5rem;
    color: #0872a1;
  }

  p {
    font-size: 1.5rem;
  }
`

const Better = () => (
  <Container>
    <Head>
      <title>Better - Not Bigger | Dock90</title>
    </Head>
    <Header />
    <Body>
      <Overview>
        <h3>What does better look like?</h3>
        <h2>Streamlined</h2>
        <p>Take what you are doing already, and transform your business with automated integrations and optimized processes.</p>
        <h2>Innovative</h2>
        <p>Go in a new direction and bring new ideas to life.</p>
        <h2>Modern</h2>
        <p>Get your products and processes up to date with a modern experience and the latest technology.</p>
      </Overview>
    </Body>
    <Footer />
  </Container>
)

export default Better
