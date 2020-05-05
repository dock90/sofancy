import Head from 'next/head'
import Link from 'next/link';
import BlockContent from "@sanity/block-content-to-react";
import styled from 'styled-components'
import sanity from "../../lib/sanity";
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// styles
const Body = styled.div`
  margin: 4rem 2rem;
`

const thoughtsQuery = `*[_type == "post"] { _id, slug { current } }`;

const singleThoughtQuery = `*[_type == "post" && slug.current == $current] {
  _id,
  slug,
  title,
  body
}[0]
`;

const BlockRenderer = props => {
  const { style = 'normal' } = props.node;

  if (style === 'h2') {
    return <h2>-- {props.children}</h2>
  }

  if (style === 'br') {
    return <br />
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const Thought = ({ thought }) => {
  const { body } = thought
  console.log('Thought Data: ', thought)
  return (
    <div>
      <Head>
        <title>Dock90 | Thought</title>
      </Head>
      <Header />
      <Body>
        <BlockContent
          blocks={body}
          serializers={{ types: { block: BlockRenderer } }}
          dataset={sanity.clientConfig.dataset}
          projectId={sanity.clientConfig.projectId}
        />
      </Body>
      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const thoughts = await sanity.fetch(thoughtsQuery);
  const paths = thoughts.map(thought => ({
    params: { current: thought.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const thought = await sanity.fetch(singleThoughtQuery, { current: params.current });
  return { props: { thought } };
};

export default Thought
