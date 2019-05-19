import { Link } from "gatsby"
import React, { Component } from "react"
import { slide as Slide } from "react-burger-menu"
import styled from "styled-components"

const DesktopMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
`

const Logo = styled.p`
  font-weight: 600;
`

const MenuItem = styled(Link)`
  margin-left: 32px;
  color: initial;
  font-weight: 600;
  text-decoration: none;
`

class Menu extends Component {
  state = {
    width: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  showSettings(e) {
    e.preventDefault()
  }

  render() {
    const { width } = this.state

    if (width < 768) {
      return (
        <Slide>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Slide>
      )
    } else {
      return (
        <React.Fragment>
          <Logo>Yastrebov.</Logo>
          <DesktopMenu>
            <MenuItem to="#projects">Projects</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </DesktopMenu>
        </React.Fragment>
      )
    }
  }
}

export default Menu
