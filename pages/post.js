import PropTypes from 'prop-types';
import groq from 'groq';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import client from '../client';
import withLayout from '../lib/withLayout';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Thought(props) {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
  } = props;
  return (
    <article style={{ margin: '0px 40px' }}>
      <h1
        style={{
          textTransform: 'uppercase',
          fontFamily: 'Roboto, Oxygen, Ubuntu, Open Sans, sans-serif',
          fontSize: '2.7rem',
          textAlign: 'left',
          color: 'rgb(76, 79, 90)',
          padding: '6rem 0 2rem 0',
          lineHeight: '3rem',
        }}
      >
        {title}
      </h1>
      <div
        style={{
          margin: '1rem 0 2rem 0',
          color: 'rgb(85, 85, 85)',
        }}
      >
        {categories && (
          <ul
            style={{
              display: 'flex',
              marginLeft: '-2.5rem',
            }}
          >
            Posted in:
            {categories.map(category => (
              <li
                style={{
                  paddingLeft: '1rem',
                  listStyle: 'none',
                }}
                key={category}
              >
                *{category}
              </li>
            ))}
          </ul>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
          <p
            style={{
              padding: '0 0 0 1rem',
              fontSize: '1rem',
            }}
          >
            By {name}.
          </p>
        </div>
      </div>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      <Link prefetch href="/">
        <a>Back to home</a>
      </Link>
    </article>
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
