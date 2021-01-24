import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem 2rem;

  p {
    margin: 0;
    padding: 0;
  }
`

const Contact = styled.p``

const Footer = () => (
  <Container>
    <Contact>edward@dock90.io</Contact>
  </Container>
)

export default Footer
