import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 2rem;

  p {
    color: #4c4f5a;
    margin: 0;
    padding: 0;
  }
`

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  justify-self: start;

  a {
    margin-left: 1rem;
  }
`

const Footer = () => (
  <Container>
    <p>edward@dock90.io</p>
    <SocialLinks>
      <a href='https://github.com/dock90'><p>github</p></a>
      <a href='https://dribbble.com/edwardgoomba'><p>dribbble</p></a>
      <a href='https://www.linkedin.com/company/dock-90'><p>linkedin</p></a>
    </SocialLinks>
  </Container>
)

export default Footer
