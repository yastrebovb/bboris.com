import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Projects from "../components/Projects/Projects"
import Form from "../components/Form/Form"
import Image from "../components/Image/Image"
import { Codepen, Github, Twitter, Mail } from "../styles/icons"
import {
  Section,
  Heading,
  Text,
  List,
  ListItem,
  Email,
  StyledLink,
  ProfileWrapper,
  WaveEmoji,
} from "../styles/pages/"

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
        <SEO title="1" keywords={[`gatsby`, `application`, `react`]} />
        <Section big>
          <Heading size="big">
            Good {this.state.dateTime}! <WaveEmoji symbol="👋" label="wave" />
            <br /> My name is Boris and I am front-end developer.
          </Heading>
          <Text maxWidth="76rem" margin="0 auto" textAlign="center">
            I enjoy turning complex problems into simple, beautiful and
            intuitive interfaces. When I'm not coding or learning new stuff,
            you'll find me searching what to build next, trying to do some
            design or working out in the park.
          </Text>
          <Email>hello@bboris.com</Email>
        </Section>
        <Section id="projects">
          <Heading size="medium">Some of my selected projects</Heading>
          <Projects />
        </Section>
        <Section id="about">
          <Heading size="medium">About</Heading>
          <Text maxWidth="70rem" margin="0 auto">
            I’m a Front-end Developer based in Moscow.
            <br />
            <br />
            I had my first introduction to Computer Science back in June 2016
            when my schoolmate suggested taking an "Introduction to Programming"
            course with him at the BMSTU university. That's how my journey
            began.
            <br />
            <br />
            Discovering Web-Development a few weeks later was absolutely
            life-changing for me, I was amazed by the powerfulness and variety
            of things which can be built and accessed by millions of people just
            by typing a URL in their browser. I’m interested in the whole visual
            part of the web and its usability, performance, and accessibility.
          </Text>
          <ProfileWrapper>
            <Image filename="profile.jpg" />
            <Text margin="0" size="1.2rem" textAlign="center">
              Hey there! That's me
            </Text>
          </ProfileWrapper>
        </Section>
        <Section id="contact">
          <Heading size="medium">Contact</Heading>
          <List>
            <ListItem>
              <Codepen />
              <StyledLink href="https://codepen.io/yastrebov/" target="_blank">
                Codepen
              </StyledLink>
            </ListItem>
            <ListItem>
              <Github />
              <StyledLink href="https://github.com/yastrebovb" target="_blank">
                GitHub
              </StyledLink>
            </ListItem>
            <ListItem>
              <Twitter />
              <StyledLink
                href="https://twitter.com/yastrebovb?lang=en"
                target="_blank"
              >
                Twitter
              </StyledLink>
            </ListItem>
            <ListItem>
              <Mail />
              <StyledLink href="https://twitter.com/yastrebovb?lang=en">
                E-mail
              </StyledLink>
            </ListItem>
          </List>
          <Form />
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
