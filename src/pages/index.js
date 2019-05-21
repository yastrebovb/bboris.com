import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/Seo"
import Projects from "../components/Projects/Projects"
import { Section, Heading, About, Email, WaveEmoji } from "../styles/pages/"

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
            Good {this.state.dateTime}! <WaveEmoji symbol="👋" label="wave" />
            <br /> My name is Boris and I am front-end developer.
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
          <Projects />
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
