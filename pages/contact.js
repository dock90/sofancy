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
  display: grid;
  grid-template-rows: 0.2fr 1fr;
  grid-template-columns: 1fr;
  justify-items: start;
  margin: 2rem;
`

const Form = styled.form`
  min-width: 350px;
`

const FormSection = styled.div`
  display: grid;

  label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    border: 1px solid #c7ced9;
    padding: .5rem 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  textarea {
    height: 6.5rem;
  }

  button {
    cursor: pointer;
    color: #fff;
    background-color: #0872a1;
    border-color: #0872a1;
    padding: 12px 18px;
    font-size: 1.125rem;
    border-radius: .2rem;
  }
`

const Contact = () => (
  <Container>
    <Head>
      <title>Contact | Dock90</title>
    </Head>
    <Header />
    <Body>
      <h1>Tell me what you need help with and we will schedule a time to talk.</h1>
      <Form
        name="dock90-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action='/what-to-expect'
      >
        <input type="hidden" name="form-name" value="dock90-contact" />
        <FormSection>
          <label>Your Name</label>
          <input type="text" name="name" />
        </FormSection>
        <FormSection>
          <label>Email</label>
          <input type="email" name="email" />
        </FormSection>
        <FormSection>
          <label>How Can I Help? </label>
          <textarea name="message" />
        </FormSection>
        <FormSection>
          <button type="submit">Send Request</button>
        </FormSection>
      </Form>
    </Body>
    <Footer />
  </Container>
)

export default Contact
