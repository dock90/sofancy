import PropTypes from 'prop-types';
import groq from 'groq';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import client from '../client';
import withLayout from '../lib/withLayout';
import PageTitle from '../components/styled/PageTitle';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = styled.article`
  padding: 10px 45px;

  p {
    color: rgb(76, 79, 90);
    padding-top: 20px;
    max-width: 700px;
    font-size: 1.6rem;
    line-height: 1.4em;
    font-weight: 400;
  }
`;

const PostInfo = styled.div`
  margin: 1rem 0 2rem 0;
  color: rgb(85, 85, 85);
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0 0 0 1rem;
    font-size: 1rem;
  }
`;

function Thought(props) {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
  } = props;
  return (
    <Post>
      <PageTitle>{title}</PageTitle>
      <PostInfo>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        <AuthorInfo>
          {authorImage && (
            <div>
              <img
                src={urlFor(authorImage)
                  .width(40)
                  .url()}
                alt="Author"
              />
            </div>
          )}
          <p>By {name}.</p>
        </AuthorInfo>
      </PostInfo>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
        // projectId={client.clientConfig.projectId}
        // dataset={client.clientConfig.dataset}
      />
      <Link prefetch href="/">
        <a>Back to home</a>
      </Link>
    </Post>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  _updatedAt
}`;

Thought.getInitialProps = async context => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

Thought.propTypes = {
  post: PropTypes.object,
};

export default withLayout(Thought);
