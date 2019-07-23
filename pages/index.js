import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import withLayout from '../lib/withLayout';
import media from '../components/styled/Media';

// styles
const MainWrapper = styled.div`
  max-width: 1600px;
  margin: 0px 40px;
`;

const Intro = styled.h1`
  padding: 6rem 0 2rem 0;
  font-size: 2.7rem;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 60%;
  font-weight: 300;
  line-height: 1.3em;

  ${media.phone`
    width: 100%;
  `}
`;

const FollowUp = styled.h2`
  padding: 6rem 0 2rem 0;
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 60%;
  font-weight: 300;
  line-height: 1.3em;

  ${media.phone`
    width: 100%;
  `}
`;

const SectionHeader = styled.h2`
  padding: 6rem 0 0 0;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 60%;
  font-weight: 300;
  line-height: 1.3em;

  ${media.phone`
    width: 100%;
  `}
`;

const SectionDetails = styled.h2`
  padding: 2rem 0 0 0;
  font-size: 4rem;
  line-height: 1.3em;
  font-family: 'Roboto', sans-serif;
  color: rgb(76, 79, 90);
  width: 80%;

  ${media.phone`
    width: 100%;
  `}
`;

const SectionSubdetails = styled.h2`
  padding: 0;
  color: rgb(76, 79, 90);
  font-weight: 300;
  line-height: 1.5em;
  width: 50%;

  ${media.phone`
    width: 100%;
  `}
`;

const AltIntro = styled.h2`
  padding: 0 0 2.2rem 0;
  line-height: 1.5em;
  width: 60%;

  ${media.phone`
    width: 100%;
  `}
`;

const NavLink = styled.a`
  color: #0872a1;
  font-size: 4rem;
  font-weight: 600;
  transition: all 100ms ease 0s;
  text-decoration: none;
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
    <Intro>
      Are you dealing with fragmented systems?
      <br />
      Struggling with inefficiency?
      <br />
      Processes no longer scaling with your team?
    </Intro>
    <FollowUp>
      At dock90 we build tools for small businesses of 5-20 people that increase
      efficiency and better manage resources.
    </FollowUp>
    <AltIntro>
      We focus on business impact and don't waste time building unnecessary
      features.
    </AltIntro>
    <SectionHeader>How do we help?</SectionHeader>
    <SectionDetails>Start: Product Roadmap</SectionDetails>
    <SectionSubdetails>
      We take the time to understand your business, customers and problem.
      Working together we generate new ideas and converge on a solution. To wrap
      it up we polish everything into a document outlining all our discussions
      giving you the tools you need to move forward.
    </SectionSubdetails>
    <SectionDetails>Then: Solve Problem</SectionDetails>
    <SectionSubdetails>
      Use the Product Roadmap we implement the solution freeing up the way for
      unity and scaling. We follow up consistently to make sure our
      implementation was a good fit and are there to help you as needed.
    </SectionSubdetails>
    <SectionHeader>Next Steps?</SectionHeader>
    <SectionDetails>
      Sound like a good fit?
      <Link prefetch href="/start">
        <NavLink> Start a Project</NavLink>
      </Link>
    </SectionDetails>
  </MainWrapper>
);

export default withLayout(Index);
