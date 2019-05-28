import React, { Component } from "react"
import { slide as MobileMenu } from "react-burger-menu"
import {
  DesktopMenu,
  Logo,
  MenuItem,
  StyledLink,
  StyledMobileMenu,
} from "./style"

class Menu extends Component {
  state = {
    width: "",
    isOpen: false,
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
    this.setState({ width: window.innerWidth })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen })
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { width, isOpen } = this.state

    if (width < 1024) {
      return (
        <StyledMobileMenu>
          <MobileMenu
            right
            isOpen={isOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <MenuItem href="#home" mobile={"true"} onClick={this.closeMenu}>
              Home
            </MenuItem>
            <MenuItem href="#projects" mobile={"true"} onClick={this.closeMenu}>
              Projects
            </MenuItem>
            <MenuItem href="#about" mobile={"true"} onClick={this.closeMenu}>
              About
            </MenuItem>
            <MenuItem href="#contact" mobile={"true"} onClick={this.closeMenu}>
              Contact
            </MenuItem>
            <StyledLink
              href="mailto:hello@bboris.com?subject=Hey Boris!👋"
              onClick={this.closeMenu}
            >
              hello@bboris.com
            </StyledLink>
          </MobileMenu>
        </StyledMobileMenu>
      )
    } else {
      return (
        <React.Fragment>
          <Logo>Yastrebov.</Logo>
          <DesktopMenu>
            <MenuItem href="#projects">Projects</MenuItem>
            <MenuItem href="#about">About</MenuItem>
            <MenuItem href="#contact">Contact</MenuItem>
          </DesktopMenu>
        </React.Fragment>
      )
    }
  }
}

export default Menu
