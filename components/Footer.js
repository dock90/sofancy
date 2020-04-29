import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem 2rem;

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
      <p>The Candy Factory</p>
    </CurrentSpace>
    <CurrentAddress>
      <p>342 N Queen St, Rear</p>
      <p>Warehouse D</p>
      <p>Lancaster, PA 17603</p>
    </CurrentAddress>
    <Contact>edward@dock90.io</Contact>
  </Container>
)

export default Footer
