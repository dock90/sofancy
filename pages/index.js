import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import withLayout from '../lib/withLayout';
import media from '../components/styled/Media';

const MainWrapper = styled.div`
  max-width: 1600px;
  margin: 0px 40px;
`;

const Intro = styled.h1`
  padding: 6rem 0 2rem 0;
  font-size: 2.7rem;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 50%;
  font-weight: 300;
  line-height: 1.3em;

  ${media.phone`
    width: 100%;
  `}
`;

const AltIntro = styled.h2`
  padding: 0 0 2.2rem 0;
  width: 50%;

  ${media.phone`
    width: 100%;
  `}
`;

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  border-radius: 0 !important;
  ${media.phone`
    margin-bottom: 1rem;
  `}

  h2 {
    margin: 1rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.3em;
  }
`;

const Index = () => (
  <MainWrapper>
    <Head>
      <title>Product Design and Engineering Studio | dock90</title>
      <meta
        name="description"
        content="At dock90 we build tools that increase efficiency and better manage resources for companies with complex systems."
      />
    </Head>
    {/* <Intro>
      At dock90 we help privately funded SaaS startups figure out where to start
      and what to build next.
    </Intro> */}
    <Intro>
      At dock90 we build tools that increase efficiency and better manage
      resources for companies with complex systems.
    </Intro>
    <AltIntro>
      We focus on business impact and don't waste time building unnecessary
      features.
    </AltIntro>
    {/* <Grid container direction="row" align="center">
      <Grid
        item
        sm={3}
        xs={12}
        style={{ marginRight: '1.5rem', textAlign: 'left' }}
      >
        <StyledCard elevation={4}>
          <h2>strategy</h2>
        </StyledCard>
      </Grid>
    </Grid> */}
  </MainWrapper>
);

export default withLayout(Index);
