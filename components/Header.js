import Link from 'next/link';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  justify-items: space-between;
  align-items: center;
  margin: 1rem 2rem;
`

const Logo = styled.div`
  display: grid;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;

  a {
    margin-left: 1rem;
  }
`

const NavLink = styled.a`
  color: #4c4f5a;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Lato;
  cursor: pointer;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const Header = () => (
  <Container>
    <Logo>
      <Link href='/'>
        <NavLink>dock90</NavLink>
      </Link>
    </Logo>
    <Links>
      <Link href='/about'>
        <NavLink>about</NavLink>
      </Link>
      <Link href='/work'>
        <NavLink>work</NavLink>
      </Link>
      <Link href='/thoughts'>
        <NavLink>thoughts</NavLink>
      </Link>
      <Link href='/contact'>
        <NavLink>contact</NavLink>
      </Link>
    </Links>
  </Container>
)

export default Header
