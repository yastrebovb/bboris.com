import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import styled from "styled-components"
import "react-tabs/style/react-tabs.css"

const StyledTabList = styled(TabList)`
  display: block;
  max-width: 20rem;
  margin: 1rem auto;
  font-size: 1.8rem;
  font-weight: 500;
`

const Projects = () => {
  return (
    <Tabs>
      <StyledTabList>
        <Tab>All</Tab>
        <Tab>Websites</Tab>
      </StyledTabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  )
}

export default Projects
