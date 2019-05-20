import React, { Component } from "react"
import { slide as MobileMenu } from "react-burger-menu"
import { DesktopMenu, Logo, MenuItem, StyledMobileMenu } from "./style"

class Menu extends Component {
  state = {
    width: window.innerWidth,
    isOpen: false,
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
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

    if (width < 768) {
      return (
        <StyledMobileMenu>
          <MobileMenu
            right
            isOpen={isOpen}
            onStateChange={state => this.handleStateChange(state)}
          >
            <MenuItem
              to="#projects"
              mobile={"true"}
              onClick={() => this.closeMenu()}
            >
              Projects
            </MenuItem>
            <MenuItem to="#about" mobile={"true"}>
              About
            </MenuItem>
            <MenuItem to="#concat" mobile={"true"}>
              Contact
            </MenuItem>
          </MobileMenu>
        </StyledMobileMenu>
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
