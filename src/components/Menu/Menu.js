import React, { Component } from "react"
import withSizes from "react-sizes"
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
    width: 1100,
  }

  handleStateChange(state) {
    this.setState({ isOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { isOpen } = this.state
    const { isMobile } = this.props

    if (isMobile) {
      return (
        <StyledMobileMenu>
          <MobileMenu
            right
            disableAutoFocus
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
              href="mailto:contact.yastrebov@gmail.com?subject=Hey Boris!👋"
              onClick={this.closeMenu}
            >
              contact.yastrebov@gmail.com
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
})

export default withSizes(mapSizesToProps)(Menu)
