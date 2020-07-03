import Head from 'next/head'
import Link from 'next/link';
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
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  margin: 2rem;
`

const Intro = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 3rem;
  }

  a {
    color: #4c4f5a;
    text-decoration-line: underline;
    text-decoration-color: #0872a1;
    text-decoration-thickness: 4px;
  }
`

const Home = () => (
  <Container>
    <Head>
      <title>Dock90 | Web App Development Studio</title>
      <meta
        name="description"
        content="Hi there, welcome to Dock90. I help small businesses drive innovation in the ever competitive world."
      />
    </Head>
    <Header />
    <Body>
      <Intro>
        <h2>Hi there, welcome to Dock90.</h2>
        <h1>I help small businesses <Link href='/about'><a>drive innovation</a></Link> in the ever competitive world.</h1>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default Home
