import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/Seo"
import Projects from "../components/Projects/Projects"

const Section = styled.section`
  padding: ${({ big }) => (big ? "120px 0" : "60px 0")};
`

const Heading = styled.h1`
  font-size: ${({ size }) =>
    size === "big"
      ? "32px"
      : size === "medium"
      ? "28px"
      : size === "small"
      ? "24px"
      : null};
  line-height: 44px;
  text-align: center;
`

const About = styled.p`
  max-width: 730px;
  margin: 0 auto;
  font-size: 17px;
  text-align: center;
  line-height: 22px;
`

const Email = styled.a`
  display: block;
  margin: 30px 0;
  font-size: 18px;
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

        <Section>
          <Heading size="medium">Some of my selected projects</Heading>
          <Projects />
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
