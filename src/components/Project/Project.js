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
  font-size: 1.8rem;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 1.6rem;
`

const Links = styled.div`
  display: flex;
  margin-top: auto;
`

const Link = styled.a`
  margin-right: 1rem;
  color: inherit;
  font-size: 1.6rem;
`

const Project = ({ title, description, link, code, filename }) => (
  <ProjectStyled>
    <Title>{title}</Title>
    <Image filename={filename} />
    <Description>{description}</Description>
    <Links>
      {link && (
        <Link href={link} target="_blank">
          Demo
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
