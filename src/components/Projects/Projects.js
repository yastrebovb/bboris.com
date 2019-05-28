import React from "react"
import { Tab } from "react-tabs"
import Project from "../Project/Project"
import "react-tabs/style/react-tabs.css"
import { StyledTabs, StyledTabList, ProjectsList } from "./style"

class Projects extends React.Component {
  state = {
    categories: ["all", "websites"],
    projects: [
      {
        title: "News Dashboard",
        keywords: ["all"],
        tools: [
          "React",
          "Redux",
          "Redux-thunk",
          "Styled-components",
          "Heroku",
          "api",
        ],
        filename: "news.png",
        link: "https://redux-news-dashboard.herokuapp.com/",
        code: "https://github.com/yastrebovb/news-dashboard",
      },
      {
        title: "Website for a wholesale company",
        keywords: ["all", "websites"],
        tools: ["Pug", "SCSS", "Webpack", "JavaScript", "Zapier"],
        filename: "wholesale.png",
        link: "https://bellababy.ru/",
        code: "https://github.com/yastrebovb/bellababy",
      },
      {
        title: "Website for a law company",
        keywords: ["all", "websites"],
        tools: ["CSS", "JavaScript", "Deisgn", "API"],
        filename: "law.png",
        link: "https://chattaev.ru/",
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
        title: "Forbes List app",
        keywords: ["all"],
        tools: ["React", "SCSS", "HTML", "API"],
        filename: "forbes.png",
        link: "https://codepen.io/yastrebov/full/axboJg",
        code: "https://codepen.io/yastrebov/pen/axboJg",
      },
    ],
  }

  render() {
    const { categories, projects } = this.state

    const renderFilteredProjects = projects => {
      return projects.map(project => (
        <Project key={project.filename} {...project} />
      ))
    }

    return (
      <StyledTabs>
        <StyledTabList>
          {categories.map(category => (
            <Tab key={category}>{category}</Tab>
          ))}
        </StyledTabList>

        {categories.map(category => (
          <ProjectsList key={category}>
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
