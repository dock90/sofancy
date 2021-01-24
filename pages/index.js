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
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  margin: 4rem 2rem 10rem 2rem;

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

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 4rem;
`

const CopyContainer = styled.div`
  h1 {
    font-size: 96px;
  }
  h2 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`

const Home = () => (
  <Container>
    <Head>
      <title>Dock90</title>
      <meta
        name='title'
        content='Dock90'
      />
      <meta
        name='description'
        content='Our sole focus at Dock90 is to redefine the future by building the next generation of world-changing companies.'
      />
    </Head>
    <Header />
    <Body>
      <Intro>
        <CopyContainer>
          <h1>Redefine the future by building the next generation of world-changing companies.</h1>
          <h2>We work with founders worldwide to turn the best ideas into privately funded companies focused on rapid time to profit.</h2>
        </CopyContainer>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default Home
