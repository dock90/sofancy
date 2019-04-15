import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import withLayout from '../lib/withLayout';

const MainWrapper = styled.div`
  max-width: 1600px;
  margin: 0px auto;
`;

const Intro = styled.h1`
  padding: 5vh 0px;
  font-size: 2.7rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 50%;
  font-weight: 300;
  line-height: 1.3em;
`;

const AltIntro = styled.h2`
  width: 50%;
`;

const Index = () => (
  <MainWrapper>
    <Head>
      <title>Product Design and Engineering Studio | dock90</title>
      <meta
        name="description"
        content="Dock90 is a product design studio. We help privately funded SaaS startups figure out where to start and what to build next."
      />
    </Head>
    <Intro>
      At dock90 we help privately funded SaaS startups figure out where to start
      and what to build next.
    </Intro>
    {/* <Intro>
      At dock90 we build tools and processes for companies with complex systems
      looking to increase efficiency and manage their resources better.
    </Intro> */}
    <AltIntro>
      Unlike other studios, we focus on building what will make the most impact
      instead of wasting your time building your wishlist of features.
    </AltIntro>
    <h3>What we offer: strategy, design, development.</h3>
  </MainWrapper>
);

export default withLayout(Index);
