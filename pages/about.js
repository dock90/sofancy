import Link from 'next/link';
import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  margin: 2rem;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-bottom: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 3rem;
    line-height: 4rem;
  }

  h3 {
    font-size: 2rem;
    line-height: 3rem;

    b {
      text-decoration: none;
      border-bottom: 5px solid #0872a1;
    }
  }

  h4 {
    font-size: 2rem;
    color: #0872a1;
  }

  span {
    color: #0872a1;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #4c4f5a;
    background: none;
    border: 4px solid #0872a1;
    padding: 1rem;
    cursor: pointer;

    :hover {
      background: #0872a1;
      color: #f7f9fc;
    }
  }
`

const About = () => (
  <Container>
    <Head>
      <title>About | Dock90</title>
      <meta
        name='title'
        content='See what I am about.'
      />
      <meta
        name='description'
        content='Im no unicorn BUT...I have been working with startups like yours for the past three years.'
      />
    </Head>
    <Header />
    <Body>
      <Intro>
        <h4>Does this sound familiar?</h4>
        <h1>"All of our developers are working on the core product. We don't have the resources to experiment with this."</h1>
        <h2>"We need to build out the next version of our product. We have no one in house who nows how to do this."</h2>
        <h2>"We acquired funding and have proven our concept. Now we need to expand our MVP into a solid V1."</h2>
        <h2>"Hiring takes a long time. It does not make sense for us at the stage we are in."</h2>
      </Intro>
      <Intro>
        <h4>What do you do?</h4>
        <h3>You hire a contractor. They skip the discovery phase - they just want to get to work. Everyone is excited. Work gets done, everything is going well. Then you review the work.</h3>
        <h3>Things just don't make sense. You know your customers would never use the payment screen in that way. And why the hell do you have three different types of modals across the board? Okay, you chalk it up to quick iterations - <span>"We just had to get this done"</span> you say.</h3>
        <h3>Your team then goes to add a new feature a few months down the road. The code is a mess - it barely works. You end up having to refactor everything that was done costing your team financially and using up time you could have bene shipping new features.</h3>
        <h3>You wish you had just hired someone to work in house.</h3>
      </Intro>
      <Intro>
        <h4>In a perfect world...</h4>
        <h3>You work with someone who understands how to balance the competing concerns of product development. Responsibility to customer, responsibility to business, and responsibility to developer.</h3>
        <h3>Your users are delighted and you delivered the quality features they want. You reduced cost and generated revenue by delivering value quickly and iteratively. You minimized technical debt by having quality, maintainable code.</h3>
        <h3>The work makes sense. The UX is clean and follows the steps your customers would expect. The UI is consistent, errors are handled gracefully. Most important - when a user first signs on, the blank slate experience is fantastic. Your customers know exactly how your product will look and function without having to spend weeks or months work in it only to discover, its not what they want.</h3>
        <h3>You go to add a new feature a few months later. Your developers already know whats going on. They had an onboarding with the contractor prior to work was wrapped up. You refer to the documentation for complex processes. There is a visual guide to information flow. The code is clean, extending it is a joy.</h3>
        <h3><b>You think working with a contractor is the best decision you made.</b></h3>
      </Intro>
      <Intro>
        <h4>Im no unicorn BUT...</h4>
        <h3>I have been working with startups like yours for the past three years. Startups are unique. I have made mistakes in the past and learned what works, and what doesn't when it comes to working with you.</h3>
        <h3>I know how to break down your endless feature list and get you to focus on your mvp. I have designed, built and shipped products from start to finish. This puts me in a unique position where I understand the full product cycle and can work with your team at any point in the game.</h3>
        <h3>I don't just dive in and get to work. I take the time to understand your goals, what your customers pain points are, and what your roadmap looks like. I help you wireframe, design and prototype new ideas to quickly validate if they will work or not. When all the stars align, I help you develop your product. I focus on balancing moving quickly and writing clean, maintainable code.</h3>
        <h3>If you are thinking "Edward, you literally have read my mind" while you have read through this - take some time to explore a few teams I have partnered with in the past.</h3>
        <Link href='/work'>
          <a>
            <button>Explore my work</button>
          </a>
        </Link>
      </Intro>
    </Body>
    <Footer />
  </Container>
)

export default About
