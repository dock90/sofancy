import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components'
import sanity from "../lib/sanity";
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  margin: 7rem 2rem;

  h1 {
    margin-bottom: 4rem;
  }
`

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  grid-gap: 4rem;
`

const Project = styled.div`
  display: grid;
`

const Image = styled.img`
  height: auto;
  width: 100%;
  box-shadow: 8px 9px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
`

const NavLink = styled.a`
  color: #0872a1;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: Lato;
  margin-bottom: 1rem;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`

const Categories = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
`

const Subtitle = styled.p`
  margin: 0;
`

const query = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  slug,
  mainImage {
    asset->{url}
  },
  projectCategories []->{title}
}
`;

const Work = ({ works }) => {
  return (
    <Container>
      <Head>
        <title>Work | Dock90</title>
      </Head>
      <Header />
      <Body>
        <h1>Results! Take some time to explore a few teams I have partnered with in the past.</h1>
        <Projects>
          {works.map(work => {
            const {
              _id,
              slug: { current },
              title,
              subtitle,
              mainImage: {
                asset: {
                  url
                }
              },
              projectCategories
            } = work
            return (
              <Project key={_id}>
                <Image src={url} />
                <Categories>
                  {projectCategories.map(category => {
                    const { title } = category
                    return title
                  }).join(', ')}
                </Categories>
                <Link href="/project/[current]" as={`/project/${current}`} >
                  <NavLink>{title}</NavLink>
                </Link>
                <Subtitle>{subtitle}</Subtitle>
              </Project>
            )
          })}
        </Projects>
      </Body>
      <Footer />
    </Container>
  )
}

export const getStaticProps = async () => {
  const works = await sanity.fetch(query);
  return {
    props: { works }
  };
};

export default Work
