import React from "react"
import styled from "styled-components"

const ProjectStyled = styled.div`
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

const Link = styled.a`
  display: block;
  margin-top: auto;
  color: inherit;
  font-size: 1.8rem;
`

const Project = ({ title, description, link }) => (
  <ProjectStyled>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {link && <Link>{link}</Link>}
  </ProjectStyled>
)

export default Project
