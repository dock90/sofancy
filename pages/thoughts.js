import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'
import sanity from "../lib/sanity";
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`

const Body = styled.div`
  margin: 5rem 2rem;

  h1 {
    margin: 0;
    margin-bottom: 4rem;
  }
`

const Thought = styled.div`
  margin-bottom: 2.5rem;
`

const NavLink = styled.a`
  color: #0872a1;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  font-family: Lato;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const Subtitle = styled.p`
  margin: 0;
`

const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  subtitle,
  slug,
  mainImage,
}
`;

const Thoughts = ({ thoughts }) => (
  <Container>
    <Head>
      <title>Thoughts | Dock90</title>
    </Head>
    <Header />
    <Body>
      <h1>Thoughts</h1>
      {thoughts.map(thought => {
        const { _id, slug: { current }, title, subtitle } = thought
        return (
          <Thought key={_id}>
            <Link href="/thought/[current]" as={`/thought/${current}`} >
              <NavLink>{title}</NavLink>
            </Link>
            <Subtitle>{subtitle}</Subtitle>
          </Thought>
        )
      })}
    </Body>
    <Footer />
  </Container>
)

export const getStaticProps = async () => {
  const thoughts = await sanity.fetch(query);
  return {
    props: { thoughts }
  };
};

export default Thoughts
