import styled from "styled-components"
import Emoji from "../../components/Emoji/Emoji"
import { shakeHand } from "../animations"

export const Section = styled.section`
  padding: ${({ big }) => (big ? "12rem 0" : "6rem 0")};
`

export const Heading = styled.h1`
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

export const About = styled.p`
  max-width: 73rem;
  margin: 0 auto;
  font-size: 1.7rem;
  text-align: center;
  line-height: 2.2rem;
`

export const Email = styled.a`
  display: block;
  margin: 3rem 0;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`

export const WaveEmoji = styled(Emoji)`
  display: inline-block;
  animation: ${shakeHand} 1.7s 0.5s ease-in-out;
  transform-origin: 50% 90%;
`
