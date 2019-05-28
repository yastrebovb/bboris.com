import React from "react"
import Emoji from "../Emoji/Emoji"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 2.5rem 0;
`

const Copyright = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  text-align: center;
`

const Footer = () => (
  <FooterWrapper>
    <Copyright>
      © {new Date().getFullYear()}, Boris Yastrebov{" "}
      <Emoji symbol="👨‍💻" label="man-technologist" />
    </Copyright>
  </FooterWrapper>
)

export default Footer
