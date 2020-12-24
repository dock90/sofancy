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
  margin: 4rem 2rem 6rem 2rem;

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

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 4rem;
`

const Service = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, .1);
  }
`

const Services = () => (
  <Container>
    <Head>
      <title>Dock90 | Services</title>
      <meta
        name='title'
        content='Learn more about what I do'
      />
      <meta
        name='description'
        content='Know where to start. Design that makes sense. Quality, maintainable code.'
      />
    </Head>
    <Header />
    <Body>
      <h1>Services</h1>
      <ServicesContainer>
        <Service>
          <h2>🗺 Strategy</h2>
          {/* <img src='/me.jpg' /> */}
          <h3>"We have a great idea that we want to test out, but we are not sure where to start."</h3>
          <Link href='/strategy'>
            <a>
              <button>Take the first step</button>
            </a>
          </Link>
        </Service>
        <Service>
          <h2>👨🏻‍💻 Development</h2>
          {/* <img src='/me.jpg' /> */}
          <h3>"We have a solid plan of action and know where to go, we just need some help to get it done."</h3>
          <Link href='/development'>
            <a>
              <button>Make it a reality</button>
            </a>
          </Link>
        </Service>
      </ServicesContainer>
    </Body>
    <Footer />
  </Container>
)

export default Services
