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
        <div key={project.frontmatter.slug}>
          {project.frontmatter.url ? (
            <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
              <ProjectCard project={project}>
                <ExternalLinkSVG size={16} />
              </ProjectCard>
            </a>
          ) : (
            <Link
              to={project.frontmatter.category + "/" + project.frontmatter.slug}
              state={{ originPage: "Home" }}
            >
              <ProjectCard project={project}>
                <OpenSVG size={16} />
              </ProjectCard>
            </Link>
          )}
        </div>
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    projects: allMdx {
      nodes {
        frontmatter {
          category
          description
          endDate
          featured
          length
          preview
          slug
          size
          startDate
          thumb
          title
          url
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
