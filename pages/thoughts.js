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
      {thoughts.map(thought => {
        const { _id, slug: { current }, title } = thought
        return (
          <Link href="/thought/[id]" as={`/thought/${_id}`} key={_id}>
            <a>{title}</a>
          </Link>
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
