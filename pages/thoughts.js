import React from 'react';

const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '75nxt488',
  dataset: 'production',
});

const Thoughts = () => {
  client
    .fetch(
      '*[_type == $type][0...5]', // Query
      { type: 'post' } // Params (optional)
    )
    .then(res => {
      console.log('5 posts: ', res);
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err);
    });
  return <p>Thoughts Page</p>;
};

export default Thoughts;
