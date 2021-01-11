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
      <title>🗺 Strategy | Dock90</title>
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
      <h3>Past You: "We have a great idea that we want to test out, but we are not sure where to start."</h3>
      <h3>Future You: "We know exactly what to do and where to start to implement our ideas."</h3>
      <h3>How do you get from where you are, to where you want to be?</h3>
      <p>The strategy phase is about understanding your goals and coming up with a plan to execute on them. Get a new perspective on the same problems you seem to be running into again and again. Layout your project, map unknowns and identify actionable next steps to take and get started.</p>
      <p>Ready to define and take the next steps for your project?</p>
      <Link href='/contact'>
        <a>
          <button>Get in Touch</button>
        </a>
      </Link>
    </Body>
    <Footer />
  </Container>
)

export default Discovery
