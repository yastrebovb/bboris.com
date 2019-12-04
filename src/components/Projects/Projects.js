import React from "react"
import { Tab } from "react-tabs"
import Project from "../Project/Project"
import "react-tabs/style/react-tabs.css"
import { StyledTabs, StyledTabList, ProjectsList } from "./style"

class Projects extends React.Component {
  state = {
    categories: ["all", "websites", "apps"],
    projects: [
      {
        title: "Website for a tech company",
        keywords: ["all", "websites"],
        tools: [
          "Gatby.js",
          "React",
          "SCSS",
          "Intercom",
          "Google Analytics",
          "Mailchimp",
          "Blog",
        ],
        filename: "ally.png",
        link: "https://www.getally.com/",
      },
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
        title: "This website 😁",
        keywords: ["all", "websites"],
        tools: ["gatsby.js", "react", "styled-components", "now"],
        filename: "bboris.png",
        code: "https://github.com/yastrebovb/bboris.com",
      },
      {
        title: "Website for a tech start-up",
        keywords: ["all", "websites"],
        tools: ["Pug", "SCSS", "Webpack", "JavaScript", "Google app scripts"],
        filename: "trustmyid.png",
        link: "https://trust-my-id.yastreb.now.sh/",
        code: "https://gitlab.com/yastrebovb/trustmyid",
      },
      {
        title: "Website for a software consultancy",
        keywords: ["all", "websites"],
        filename: "trustmyid.png",
        tools: ["Pug", "Webpack", "SCSS", "Webpack", "JavaScript"],
        filename: "wavecomputing.png",
        link: "http://wavecomputing.com/",
      },
      {
        title: "Website for a wholesale company",
        keywords: ["all", "websites"],
        tools: ["Pug", "SCSS", "Webpack", "JavaScript", "Google app scripts"],
        filename: "wholesale.png",
        link: "https://bellababy.ru/",
        code: "https://github.com/yastrebovb/bellababy",
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
        title: "AppStore: Clowny",
        keywords: ["all", "apps"],
        tools: ["React-Native", "expo", "ios", "Styled-components", "admob"],
        filename: "clowny.jpg",
        link:
          "https://apps.apple.com/us/app/clowny-scare-prank/id1471799698?l=ru&ls=1",
      },
      {
        title: "AppStore: Celeby",
        keywords: ["all", "apps"],
        tools: [
          "React-Native",
          "ios",
          "Styled-components",
          "iap",
          "push notifications",
          "analytics",
        ],
        filename: "celebsapp.jpg",
        link: "https://celebschat.com/",
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
