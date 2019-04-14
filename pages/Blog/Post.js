import React, { PureComponent } from 'react';
import client from '../../client';

const BlogPost = ({ title = 'No title', name = 'No name' }) => (
  <div>
    <h1>{title}</h1>
    <span>By {name}</span>
  </div>
);

BlogPost.getInitialProps = async ({ query: { slug } }) => {
  const document = await client.fetch(
    '*[_type == "post" && slug.current == $slug][0]{title, "name": author->name}',
    { slug }
  );
  return document;
};

export default BlogPost;
