import { format } from 'date-fns';
import React, { PureComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Error from 'next/error';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '../routes';
import client from '../client';
import withLayout from '../lib/withLayout';
import CommaJoiner from '../components/CommaJoiner';
import PageTitle from '../components/styled/PageTitle';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = styled.div`
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

class Thought extends PureComponent {
  static getInitialProps = async ({ res, query: { slug } }) => {
    const post = slug
      ? await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
          title,
          "name": author->name,
          "categories": categories[]->title,
          "authorImage": author->image,
          body,
          _updatedAt
        }`,
          { slug }
        )
      : {};
    return { post };
  };

  render() {
    const { post } = this.props;
    const {
      title = 'No title',
      name = 'No name',
      categories = [],
      authorImage = {},
      body = [],
      _updatedAt = '',
    } = post;

    if (!_updatedAt) {
      return <Error statusCode={404} />;
    }

    return (
      <Post>
        <PageTitle>{title}</PageTitle>
        <PostInfo>
          Updated {format(_updatedAt, 'DD. MMMM, YYYY')}.{' '}
          {categories.length > 0 && (
            <span>
              Posted in <CommaJoiner list={categories} />
            </span>
          )}
          <AuthorInfo>
            <img
              src={urlFor(authorImage)
                .width(40)
                .url()}
              alt="Author Profile"
            />
            <p>By {name}.</p>
          </AuthorInfo>
        </PostInfo>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
        <Link route="/">
          <a>Back to home</a>
        </Link>
      </Post>
    );
  }
}

export default withLayout(Thought);

Thought.propTypes = {
  post: PropTypes.object,
};
