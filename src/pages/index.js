import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/Seo"
import Projects from "../components/Projects/Projects"

const Section = styled.section`
  padding: ${({ big }) => (big ? "12rem 0" : "6rem 0")};
`

const Heading = styled.h1`
  font-size: ${({ size }) =>
    size === "big"
      ? "3.2rem"
      : size === "medium"
      ? "2.8rem"
      : size === "small"
      ? "2.4rem"
      : null};
  line-height: 4.4rem;
  text-align: center;
`

const About = styled.p`
  max-width: 73rem;
  margin: 0 auto;
  font-size: 1.7rem;
  text-align: center;
  line-height: 2.2rem;
`

const Email = styled.a`
  display: block;
  margin: 3rem 0;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dateTime: this.getCurrentDateTime(),
    }
  }

  getCurrentDateTime = () => {
    const currentTime = new Date().getHours()

    if (currentTime >= 0 && currentTime < 12) {
      return "morning"
    } else if (currentTime > 12 && currentTime < 19) {
      return "afternoon"
    } else {
      return "evening"
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Section big>
          <Heading size="big">
            Good {this.state.dateTime}! 👋 <br /> My name is Boris and I am
            front-end developer.
          </Heading>
          <About>
            I enjoy turning complex problems into simple, beautiful and
            intuitive interfaces. When I'm not coding or learning new stuff,
            you'll find me searching what to build next, trying to design
            something or working out in the park.
          </About>
          <Email>hello@bboris.com</Email>
        </Section>

        <Section id="projects">
          <Heading size="medium">Some of my selected projects</Heading>
          <Heading size="small">Coming soon ...</Heading>
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
