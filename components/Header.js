import Link from 'next/link';
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem 2rem;
`

const NavLink = styled.a`
  color: #4c4f5a;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Lato;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const Header = () => (
  <Container>
    <Link prefetch href="/">
      <NavLink>dock90</NavLink>
    </Link>
  </Container>
)

export default Header
