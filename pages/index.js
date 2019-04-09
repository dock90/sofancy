import React from 'react';
import Head from 'next/head';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>dock90</title>
      <meta
        name="description"
        content="Dock90 is a product design studio. We help privately funded SaaS startups figure out where to start and what to build next."
      />
    </Head>
    <h1>Welcome to dock90</h1>
    <h2>
      We help privately funded SaaS startups figure out where to start and what
      to build next.
    </h2>
    <h2>
      Unlike other studios, we focus on building what will make the most impact
      instead of wasting your time building your wishlist of features.
    </h2>
    <h3>What we offer: strategy, design, development.</h3>
    <p>hello@dock90.io</p>
  </div>
);

export default withLayout(Index);
