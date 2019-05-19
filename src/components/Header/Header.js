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

const MenuItem = styled(Link)`
  margin-left: 20px;
  color: initial;
  font-weight: 600;
  text-decoration: none;
`

const Header = () => (
  <HeaderWrapper>
    <Logo>Yastrebov.</Logo>
    <Menu>
      <MenuItem to="#projects">Projects</MenuItem>
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
