import { createGlobalStyle } from "styled-components"
import { media } from "../templates"

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-size: 62.5%; // 1 rem = 10px/16px

    ${media.tablet`
      font-size: 56.25%; // 1 rem = 9px
    `}
    
    ${media.phone`
      font-size: 50%; // 1 rem = 8px
    `}

  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`
