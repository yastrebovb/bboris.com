import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Logo = styled.p``

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
`

const MenuItem = styled.li``

const Header = () => (
  <header>
    <Logo>Yastrebov.</Logo>
    <Menu>
      <MenuItem>Projects</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Menu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
