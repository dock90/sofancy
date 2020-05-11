import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components'
import sanity from "../lib/sanity";
import { format, parseJSON } from 'date-fns'
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

const Published = styled.p`
  margin: 0;
`

const query = `*[_type == "post"]{
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
      <title>Dock90 | Thoughts</title>
    </Head>
    <Header />
    <Body>
      <h1>Thoughts</h1>
      {thoughts.reverse().map(thought => {
        const { _id, slug: { current }, title, publishedAt } = thought
        const published = parseJSON(publishedAt)
        const formatted = format(published, 'MM/dd/yyyy')
        return (
          <Thought key={_id}>
            <Link href="/thought/[current]" as={`/thought/${current}`} >
              <NavLink>{title}</NavLink>
            </Link>
            <Published>{formatted}</Published>
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
