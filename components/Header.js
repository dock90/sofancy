import Link from 'next/link';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "logo links";
  justify-content: space-between;
  margin: 1rem 2rem;
`

const Logo = styled.div`
  grid-area: logo;
`

const Links = styled.div`
  grid-area: links;
  justify-self: end;
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
    <Logo>
      <Link href="/">
        <NavLink>dock90</NavLink>
      </Link>
    </Logo>
    <Links>
      <Link href="/thoughts">
        <NavLink>thoughts</NavLink>
      </Link>
    </Links>
  </Container>
)

export default Header
