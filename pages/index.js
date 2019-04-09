import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>dock90</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <Header />
    <h1>Welcome to dock90</h1>
    <h2>Strategy, design, development.</h2>
    <p>hello@dock90.io</p>
  </div>
);

export default Index;
