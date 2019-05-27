import { Tabs, TabList, TabPanel } from "react-tabs"
import styled from "styled-components"

export const StyledTabs = styled(Tabs)`
  text-transform: capitalize;

  .react-tabs__tab--selected {
    border: none;
    border-bottom: 0.25rem solid #000000;
  }
`

export const StyledTabList = styled(TabList)`
  display: block;
  width: fit-content;
  margin: 2rem auto 4rem;
  font-size: 1.8rem;
  font-weight: 500;
`

export const ProjectsList = styled(TabPanel)`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
