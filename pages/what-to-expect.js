import Link from 'next/link';
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

  h1 {
    margin-bottom: 2rem;
  }
`

const Step = styled.div`
  margin-bottom: 3rem;

  span {
    color: #0872a1;
  }
`

const WhatToExpect = () => (
  <Container>
    <Head>
      <title>What to Expect | Dock90</title>
    </Head>
    <Header />
    <Body>
      <h1>You submitted a contact request - now what?</h1>
      <Step>
        <h2><span>First</span> -  I will review your request and will be reaching out to you within one business day with next steps. </h2>
      </Step>
      <Step>
        <h2><span>Then</span> -  If I think I can provide value to you and your team I will send you times to setup a no pressure meeting. This helps me get to know you, your business and what you are looking to accomplish in more detail.</h2>
        <h2>If I think working together wont be a fit, I will quickly let you know and direct you to my network of peers who I think could be a good fit.</h2>
      </Step>
      <Step>
        <h2><span>Finally</span> - You have taken the first step to change. This is exciting and I am thankful for the opportunity to help you along your business journey!</h2>
      </Step>
    </Body>
    <Footer />
  </Container>
)

export default WhatToExpect
