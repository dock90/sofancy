import React from 'react';
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
    <Intro>
      I help fast growing companies scale up to meet exponentially increasing
      customer demands.
      <br />
    </Intro>
    {/* <AltIntro>Welcome to dock90.</AltIntro> */}

    <SectionDetails>
      Sound like a good fit?
      <Link href="/start">
        <NavLink> Start a Project</NavLink>
      </Link>
    </SectionDetails>
  </MainWrapper>
);

export default withLayout(Index);
