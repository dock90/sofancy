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

const Contact = () => (
  <Container>
    <Header />
    <Body>
      <h1>Coming soon...</h1>
    </Body>
    <Footer />
  </Container>
)

export default Contact
