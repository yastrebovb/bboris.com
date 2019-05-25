import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 2rem 0;
`

const Copyright = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`

const Footer = () => (
  <FooterWrapper>
    <Copyright>© {new Date().getFullYear()}, Boris Yastrebov</Copyright>
  </FooterWrapper>
)

export default Footer
