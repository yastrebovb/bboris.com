import React from "react"
import Emoji from "../Emoji/Emoji"
import styled from "styled-components"
import { growWidth } from "../../styles/animations"

const FooterWrapper = styled.footer`
  padding: 2.5rem 0;
`

const Copyright = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.8rem 0;
`

const MenuItem = styled.a`
  position: relative;
  margin-left: 3.2rem;
  margin-bottom: ${({ mobile }) => (mobile ? "3.6rem" : "initial")};
  color: ${({ mobile }) => (mobile ? "#ffffff" : "initial")};
  font-size: ${({ mobile }) => (mobile ? "2.1rem" : "1.6rem")};
  font-weight: 600;
  text-decoration: none;

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

const Footer = () => (
  <FooterWrapper>
    <DesktopMenu>
      <MenuItem href="#home">Home</MenuItem>
      <MenuItem href="#projects">Projects</MenuItem>
      <MenuItem href="#about">About</MenuItem>
      <MenuItem href="#contact">Contact</MenuItem>
    </DesktopMenu>
    <Copyright>
      © {new Date().getFullYear()}, Boris Yastrebov{" "}
      <Emoji symbol="👨‍💻" label="man-technologist" />
    </Copyright>
  </FooterWrapper>
)

export default Footer
