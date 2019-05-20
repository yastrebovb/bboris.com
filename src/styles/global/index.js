import { createGlobalStyle } from "styled-components"
import { media } from "../templates"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');

  html {
    font-family: 'Montserrat', sans-serif;
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
