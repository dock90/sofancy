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
  max-width: 750px;

  p {
    line-height: 1.5rem;
  }
`

const PostTitle = styled.h1`
  color: #0872a1;
`

const Overview = styled.div`
  margin-bottom: 4rem;
`

const Timeline = styled.div`
  display: grid;
  grid-template-columns: 5.3rem 6.25rem;
  margin-bottom: 0.6rem;

  h3, p {
    margin: 0;
  }

`

const Budget = styled.div`
  display: grid;
  grid-template-columns: 5.3rem 6.25rem;
  margin-bottom: 0.6rem;

  h3, p {
    margin: 0;
  }

`

const Services = styled.div`
  display: grid;
  grid-template-columns: 5.3rem 1fr;
  align-items: center;

  h3, p {
    margin: 0;
  }

`

const Categories = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 550;
`

const projectsQuery = `*[_type == "project"] { _id, slug { current } }`;

const singleProjectQuery = `*[_type == "project" && slug.current == $current] {
  _id,
  slug,
  title,
  timeline,
  budget,
  projectCategories []->{title},
  body
}[0]
`;

const BlockRenderer = props => {
  const { style = 'normal' } = props.node;
  if (style === 'br') {
    return <br />
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const Project = ({ project }) => {
  const {
    body,
    title,
    timeline,
    budget,
    projectCategories
  } = project

  return (
    <div>
      <Head>
        <title>Dock90 | {title}</title>
      </Head>
      <Header />
      <Body>
        <PostTitle>{title}</PostTitle>
        <Overview>
          <Timeline>
            <h3>Timeline: </h3>
            <p>{timeline}</p>
          </Timeline>
          <Budget>
            <h3>Budget: </h3>
            <p>{budget}</p>
          </Budget>
          <Services>
            <h3>Services: </h3>
            <Categories>
              {projectCategories.map(category => {
                const { title } = category
                return title
              }).join(', ')}
            </Categories>
          </Services>
        </Overview>
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
  const projects = await sanity.fetch(projectsQuery);
  const paths = projects.map(project => ({
    params: { current: project.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const project = await sanity.fetch(singleProjectQuery, { current: params.current });
  return { props: { project } };
};

export default Project
