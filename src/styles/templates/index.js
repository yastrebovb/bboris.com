import { css } from "styled-components"

const sizes = {
  phone: 576,
  tablet: 1024,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
