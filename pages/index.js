import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Body = styled.div`
  margin: 2rem;
`

const Intro = styled.div`
  margin-bottom: 2rem;
`

const Home = () => (
  <div>
    <Head>
      <title>Dock90 - Web App Development Studio</title>
    </Head>
    <Header />
    <Body>
      <Intro>
        <h1>Hi there, welcome to Dock90.</h1>
        <h2>I'm Edward - I build web apps.</h2>
      </Intro>
    </Body>
    <Footer />
  </div>
)

export default Home
