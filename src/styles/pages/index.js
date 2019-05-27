import styled from "styled-components"
import Image from "../../components/Image/Image"
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

export const Text = styled.p.attrs(({ maxWidth, margin, size, textAlign }) => ({
  maxWidth: maxWidth || "100%",
  margin: margin || "1rem 0",
  size: size || "1.7rem",
  textAlign: textAlign || "initial",
}))`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size};
  line-height: 2.2rem;
  text-align: ${({ textAlign }) => textAlign};
`

export const StyledLink = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

export const List = styled.ul`
  max-width: 50rem;
  margin: 0 auto;
  padding-left: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 2rem;

  svg {
    margin-right: 1rem;
  }
`

export const Email = styled.a`
  display: block;
  margin: 3rem 0;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`

export const ProfileWrapper = styled.div`
  max-width: 25rem;
  margin: 4rem auto;
`

export const WaveEmoji = styled(Emoji)`
  display: inline-block;
  animation: ${shakeHand} 1.7s 0.5s ease-in-out;
  transform-origin: 50% 90%;
`
