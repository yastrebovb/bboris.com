import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const Projects = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Websites</Tab>
      </TabList>

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
