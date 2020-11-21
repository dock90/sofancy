import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  margin: 2rem;

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

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, .1);
  }
`

const CopyContainer = styled.div`
  h1 {
    span {
      color: #0872a1;
    }
  }
  h2 {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`

const Home = () => (
  <Container>
    <Head>
      <title>Dock90 | Planning, Design, Development for Software Startups</title>
      <meta
        name='title'
        content='Planning, Design, Development for Software Startups'
      />
      <meta
        name='description'
        content='Know where to start. Design that makes sense. Quality, maintainable code.'
      />
    </Head>
    <Header />
    <Body>
      <Intro>
        <ImageContainer>
          <img src='/me.jpg' />
          <p>👋🏼 Oh hi - thats me. Edward.</p>
        </ImageContainer>
        <CopyContainer>
          <h1>Planning, Design, Development for <span>Software Startups</span></h1>
          <h2>🗺 Know where to start.</h2>
          <h2>🎨 Design that makes sense.</h2>
          <h2>👨🏻‍💻 Quality, maintainable code.</h2>
          <Link href='/services'>
            <a>
              <button>Explore Services</button>
            </a>
          </Link>
        </CopyContainer>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default Home
