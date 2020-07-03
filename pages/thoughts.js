import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'
import sanity from "../lib/sanity";
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Body = styled.div`
  margin: 2rem;
`

const Thought = styled.div`
  margin-bottom: 1.5rem;
`

const NavLink = styled.a`
  color: #0872a1;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 2rem;
  font-family: Lato;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const query = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt
}
`;

const Thoughts = ({ thoughts }) => (
  <div>
    <Head>
      <title>Thoughts | Dock90</title>
    </Head>
    <Header />
    <Body>
      <h1>Thoughts</h1>
      {thoughts.map(thought => {
        const { _id, slug: { current }, title, publishedAt } = thought
        return (
          <Thought key={_id}>
            <Link href="/thought/[current]" as={`/thought/${current}`} >
              <NavLink>{title}</NavLink>
            </Link>
          </Thought>
        )
      })}
    </Body>
    <Footer />
  </div>
)

export const getStaticProps = async () => {
  const thoughts = await sanity.fetch(query);
  return {
    props: { thoughts }
  };
};

export default Thoughts
