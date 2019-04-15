import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import withLayout from '../lib/withLayout';

const Intro = styled.h1`
  padding: 5vh 0px;
  font-size: 2.7rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 40%;
  font-weight: 300;
  line-height: 1.3em;
`;

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>dock90</title>
      <meta
        name="description"
        content="Dock90 is a product design studio. We help privately funded SaaS startups figure out where to start and what to build next."
      />
    </Head>
    <Intro>Welcome to dock90</Intro>
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
