import * as React from "react"
import { graphql, Link } from "gatsby"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import { OpenSVG } from "../icons/OpenSVG"

// Hello again Miles! File Structure:
// - Home: index.js (layout in HomeLayout.js)
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

const IndexPage = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <HomeLayout>
      {projects.map(project => (
        <div>{project.name}</div>
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    projects: allFile(filter: { sourceInstanceName: { eq: "project" } }) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
