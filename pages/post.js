import { format } from 'date-fns';
import React, { PureComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Error from 'next/error';
import PropTypes from 'prop-types';
import { Link } from '../routes';
import client from '../client';
import withLayout from '../lib/withLayout';
import CommaJoiner from '../components/CommaJoiner';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

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
      <div style={{ padding: '10px 45px' }}>
        <h1>{title}</h1>
        By {name}. Updated {format(_updatedAt, 'DD. MMMM, YYYY')}.{' '}
        {categories.length > 0 && (
          <span>
            Posted in <CommaJoiner list={categories} />
          </span>
        )}
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
            alt="Author Profile"
          />
        </div>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
        <Link route="/">
          <a>Back to home</a>
        </Link>
      </div>
    );
  }
}

export default withLayout(Thought);

Thought.propTypes = {
  post: PropTypes.object,
};
