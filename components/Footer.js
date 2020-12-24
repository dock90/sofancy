import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem 2rem;

  p {
    margin: 0;
    padding: 0;
  }
`

const CurrentSpace = styled.div`
  margin-bottom: 2rem;
`

const CurrentAddress = styled.div`
  margin-bottom: 2rem;
`

const Contact = styled.p``

const Footer = () => (
  <Container>
    <CurrentSpace>
      <p>Currently Located At:</p>
      <p>Work Hive</p>
    </CurrentSpace>
    <CurrentAddress>
      <p>159 West Broadway #200</p>
      <p>Salt Lake City, Utah 84101</p>
    </CurrentAddress>
    <Contact>edward@dock90.io</Contact>
  </Container>
)

export default Footer
