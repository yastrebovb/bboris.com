import React from "react"
import Image from "../Image/Image"
import styled from "styled-components"

const ProjectStyled = styled.article`
  display: flex;
  flex-direction: column;
  width: 35rem;
  min-height: 40rem;
  padding: 2rem 3rem;
  border-radius: 0.4rem;
  box-shadow: 0.1rem 0.1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.05);
`

const Title = styled.p`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`

const Tools = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-top: 2rem;
  font-size: 1.6rem;
  text-transform: initial;
`

const Tool = styled.span`
  margin: 4px;
  padding: 4px 8px;
  background-color: rgba(255, 204, 51, 0.6);
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: lowercase;
`

const Links = styled.div`
  display: flex;
  margin: auto auto 0 auto;
`

const Link = styled.a`
  margin-right: 1rem;
  color: inherit;
  font-size: 1.6rem;
`

const Project = ({ title, tools, link, code, filename }) => (
  <ProjectStyled>
    <Title>{title}</Title>
    <Image filename={filename} />
    <Tools>
      {tools.map(tool => (
        <Tool>{tool}</Tool>
      ))}
    </Tools>
    <Links>
      {link && (
        <Link href={link} target="_blank">
          Visit
        </Link>
      )}
      {code && (
        <Link href={code} target="_blank">
          Github
        </Link>
      )}
    </Links>
  </ProjectStyled>
)

export default Project
