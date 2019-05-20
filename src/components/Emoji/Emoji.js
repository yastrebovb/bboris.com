import React from "react"

const Emoji = ({ className, label, symbol }) => (
  <span
    role="img"
    className={className}
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
)

export default Emoji
