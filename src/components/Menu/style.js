import styled from "styled-components"

export const DesktopMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  padding: 3.8rem 0;
  list-style-type: none;
`

export const Logo = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
`

export const MenuItem = styled.a`
  margin-left: 3.2rem;
  margin-bottom: ${({ mobile }) => (mobile ? "3.6rem" : "initial")};
  color: ${({ mobile }) => (mobile ? "#ffffff" : "initial")};
  font-size: ${({ mobile }) => (mobile ? "2.1rem" : "1.6rem")};
  font-weight: 600;
  text-decoration: none;
`

export const StyledMobileMenu = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 3rem;
    height: 2.5rem;
    right: 3.2rem;
    top: 3.2rem;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-burger-bars-hover {
    background: black;
  }

  .bm-cross-button {
    right: 32px !important;
    top: 22px !important;
    height: 32px !important;
    width: 32px !important;
  }

  .bm-cross {
    width: 4px !important;
    height: 32px !important;
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`
