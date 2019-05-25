import React from "react"
import { Tab } from "react-tabs"
import Project from "../Project/Project"
import "react-tabs/style/react-tabs.css"
import { StyledTabs, StyledTabList, ProjectsList } from "./style"

class Projects extends React.Component {
  state = {
    categories: ["all", "websites", "tools"],
    projects: [
      {
        title: "News Dashboard",
        description: "a",
        keywords: ["all", "websites"],
        filename: "news-dashboard",
        link: "https://redux-news-dashboard.herokuapp.com/",
        code: "https://github.com/yastrebovb/news-dashboard",
      },
    ],
  }

  render() {
    const { categories, projects } = this.state

    const renderFilteredProjects = projects => {
      return projects.map(project => <Project {...project} />)
    }

    return (
      <StyledTabs>
        <StyledTabList>
          {categories.map(category => (
            <Tab key={category}>{category}</Tab>
          ))}
        </StyledTabList>

        {categories.map(category => (
          <ProjectsList>
            {renderFilteredProjects(
              projects.filter(project => project.keywords.includes(category))
            )}
          </ProjectsList>
        ))}
      </StyledTabs>
    )
  }
}

export default Projects
