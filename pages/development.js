import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  margin: 4rem 2rem;

  button {
    font-size: 1.5rem;
    color: #4c4f5a;
    background: none;
    border: 4px solid #0872a1;
    padding: 1rem;
    margin-top: 2rem;
    cursor: pointer;

    :hover {
      background: #0872a1;
      color: #f7f9fc;
    }
  }
`

const Development = () => (
  <Container>
    <Head>
      <title>Dock90 | 👨🏻‍💻 Development</title>
      <meta
        name='title'
        content='👨🏻‍💻 Development for Startup Marketing Teams'
      />
      <meta
        name='description'
        content='Work with someone who understands startup marketing and the need for quick validation. Bring your ideas to life in weeks, not months.'
      />
    </Head>
    <Header />
    <Body>
      <h1>👨🏻‍💻 Development</h1>
      <h3>More info coming soon.</h3>
    </Body>
    <Footer />
  </Container>
)

export default Development
