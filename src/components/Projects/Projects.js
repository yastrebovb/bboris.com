import React from "react"
import { Tab } from "react-tabs"
import Project from "../Project/Project"
import "react-tabs/style/react-tabs.css"
import { StyledTabs, StyledTabList, ProjectsList } from "./style"

class Projects extends React.Component {
  state = {
    projects: [
      {
        title: 'News Dashboard',
        description: ''
      }
    ]
  }

  render() {
    return (
      <StyledTabs>
        <StyledTabList>
          <Tab>All</Tab>
          <Tab>Websites</Tab>
        </StyledTabList>

        <ProjectsList>
          <Project title="News Dashboard" description="asdasd" link="a" />
          <Project title="News Dashboard" description="asdasd" />
          <Project title="News Dashboard" description="asdasd" />
        </ProjectsList>
        <ProjectsList>
          <Project title="Websites" description="asdasd" />
          <Project title="Websites " description="asdasd" />
          <Project title="Websites " description="asdasd" />
        </ProjectsList>
      </StyledTabs>
    )
  }
}

export default Projects
