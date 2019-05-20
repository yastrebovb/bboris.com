import { keyframes } from "styled-components"

export const shakeHand = keyframes`
  0%, 100% {
    transform: rotate(0);
  }

  25%, 75% {
    transform: rotate(30deg);
  }

  50% {
    transform: rotate(-25deg);
  }
`
