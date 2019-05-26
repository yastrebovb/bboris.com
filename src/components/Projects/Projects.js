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
        keywords: ["all"],
        tools: ["React", "Redux", "Redux-thunk", "Styled-components", "Heroku"],
        filename: "news.png",
        link: "https://redux-news-dashboard.herokuapp.com/",
        code: "https://github.com/yastrebovb/news-dashboard",
      },
      {
        title: "Split Bill app",
        keywords: ["all"],
        tools: ["React", "Redux", "Jest", "Styled-components", "Github Pages"],
        filename: "split.png",
        link: "https://yastrebovb.github.io/split-bill/",
        code: "https://github.com/yastrebovb/split-bill",
      },
      {
        title: "Website for a wholesale company",
        keywords: ["all", "websites"],
        tools: ["Pug", "SCSS", "Webpack", "JavaScript"],
        filename: "bellababy.png",
        link: "https://bellababy.ru/",
        code: "https://github.com/yastrebovb/bellababy",
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
