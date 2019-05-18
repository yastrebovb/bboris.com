import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: baseline;
  padding: 16px 0;
`

const Logo = styled.p`
  font-weight: 600;
`

const Menu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
`

const MenuItem = styled.a`
  margin-left: 20px;
  font-weight: 600;
`

const Header = () => (
  <HeaderWrapper>
    <Logo>Yastrebov.</Logo>
    <Menu>
      <MenuItem>Projects</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Menu>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
