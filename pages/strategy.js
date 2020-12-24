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

const Discovery = () => (
  <Container>
    <Head>
      <title>Dock90 | 🗺 Strategy</title>
      <meta
        name='title'
        content='🗺 Strategy for Startup Marketing Teams'
      />
      <meta
        name='description'
        content='You dont start a road trip without planning - why would you start a project without doing the same? Make a solid plan so you know exactly what you want to do.'
      />
    </Head>
    <Header />
    <Body>
      <h1>🗺 Strategy</h1>
      <h3>More info coming soon.</h3>
    </Body>
    <Footer />
  </Container>
)

export default Discovery
