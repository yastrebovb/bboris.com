import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: baseline;
`

const Header = () => (
  <HeaderWrapper>
    <Menu />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
