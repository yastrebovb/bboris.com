import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { GlobalStyle } from "../../styles/global"
import { Normalize } from "styled-normalize"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <GlobalStyle />
        <Normalize />
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
