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

  button {
    font-size: 2rem;
    color: #4c4f5a;
    background: none;
    border: 4px solid #0872a1;
    padding: 1rem;
    cursor: pointer;

    :hover {
      background: #0872a1;
      color: #f7f9fc;
    }
  }
`

const Intro = styled.div`
  margin-bottom: 4rem;

  h1 {
    font-size: 6rem;
    font-weight: 700;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  h3 {
    font-size: 2rem;
  }

  span {
    color: #0872a1;
  }
`

const Home = () => (
  <Container>
    <Head>
      <title>Dock90 | Customer Experience Studio</title>
      <meta
        name='title'
        content='Craft an unforgettable customer experience.'
      />
      <meta
        name='description'
        content='I help startups build products by fully understanding your customers pain points and delivering an unforgettable experience backed by quality, maintainable code.'
      />
    </Head>
    <Header />
    <Body>
      <Intro>
        <h1>Craft an <span>unforgettable</span> customer experience.</h1>
        <h2>I partner with startups to build products by fully understanding your customers pain points and delivering an unforgettable experience backed by quality, maintainable code.</h2>
        <h3>Want to see what this looks like?</h3>
        <Link href='/about'>
          <a>
            <button>See what I am about</button>
          </a>
        </Link>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default Home
