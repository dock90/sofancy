import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import withLayout from '../lib/withLayout';
import media from '../components/styled/Media';

// styles
const MainWrapper = styled.div`
  max-width: 1600px;
  margin: 0px 40px;
  font-family: 'Roboto', sans-serif;
`;

const Intro = styled.h1`
  padding: 2rem 0 1rem 0;
  font-size: 3rem;
  color: rgb(76, 79, 90);
  width: 80%;
  font-weight: 500;
  line-height: 1.3em;

  ${media.tablet`
    width: 90%;
  `}

  ${media.phone`
    width: 100%;
  `}
`;

const AltIntro = styled.h2`
  padding: 3rem 0 2rem 0;
  font-size: 2.7rem;
  color: rgb(76, 79, 90);
  width: 70%;
  font-weight: 300;
  line-height: 1.3em;

  ${media.phone`
    width: 100%;
  `}
`;

const SectionDetails = styled.h3`
  padding: 2rem 0 0 0;
  font-size: 2rem;
  line-height: 1.5em;
  color: rgb(76, 79, 90);
  width: 80%;

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
  line-height: 4rem;

  ${media.phone`
    font-size: 3rem;
  `}
`;

const Index = () => (
  <MainWrapper>
    <Intro>Coming Soon</Intro>
    <SectionDetails>Have a Project?</SectionDetails>
    <Link href="/start">
      <NavLink>Send Me an Email</NavLink>
    </Link>
  </MainWrapper>
);

export default withLayout(Index);
