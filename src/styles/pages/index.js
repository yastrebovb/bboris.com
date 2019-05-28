import styled from "styled-components"
import { media } from "../templates/index"
import Emoji from "../../components/Emoji/Emoji"
import { shakeHand, growWidth } from "../animations"

export const Section = styled.section`
  padding: ${({ big }) => (big ? "12rem 1rem" : "6rem 1rem")};

  ${media.phone`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `}
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

  ${media.phone`
    text-align: center;
  `}
`

export const StyledLink = styled.a`
  position: relative;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    &:after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgb(255, 204, 51);
      animation: ${growWidth} 0.15s linear;
      content: "";
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  max-width: 62rem;
  margin: 3rem auto;
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
