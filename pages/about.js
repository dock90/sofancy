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

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #0872a1;
  }
`

const Overview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #0872a1;
  }
`

const About = () => (
  <Container>
    <Head>
      <title>About | Dock90</title>
    </Head>
    <Header />
    <Body>
      <Intro>
        <h3>What I Do</h3>
        <h1>I create <span>effective strategies</span>, <span>seamless interactions</span>, and <span>modern platforms</span> to help your business grow better, instead of bigger.</h1>
      </Intro>
      {/* <Overview>
        <h3>What does better look like?</h3>
        <h2>Streamline</h2>
        <p>Take what you are doing already, and transform your business with automated integrations and optimized processes.</p>
        <h2>Innovate</h2>
        <p>Go in a new direction and bring new ideas to life.</p>
        <h2>Execute</h2>
      </Overview> */}
    </Body>
    <Footer />
  </Container>
)

export default About
