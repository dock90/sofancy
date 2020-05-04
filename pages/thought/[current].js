import Head from 'next/head'
import Link from 'next/link';
import BlockContent from "@sanity/block-content-to-react";
import styled from 'styled-components'
import sanity from "../../lib/sanity";
// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const thoughtsQuery = `*[_type == "post"] { _id, slug { current } }`;

const singleThoughtQuery = `*[_type == "post" && slug.current == $current] {
  _id,
  slug,
  title,
  body
}[0]
`;

const Thought = ({ thought }) => {
  const { body } = thought
  return (
    <div>
      <Head>
        <title>Dock90 | Thought</title>
      </Head>
      <Header />
      <BlockContent
        blocks={body}
        // serializers={serializers}
        dataset={sanity.clientConfig.dataset}
        projectId={sanity.clientConfig.projectId}
      />
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
