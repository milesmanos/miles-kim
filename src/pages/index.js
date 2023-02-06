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

  const HasUrlCard = ({ project }) => (
    <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
      <ProjectCard project={project}>
        <ExternalLinkSVG size={16} />
      </ProjectCard>
    </a>
  )

  const NoUrlCard = ({ project }) => (
    <Link
      to={project.frontmatter.category + "/" + project.frontmatter.slug}
      state={{ originPage: "Home" }}
    >
      <ProjectCard project={project}>
        <OpenSVG size={16} />
      </ProjectCard>
    </Link>
  )

  return (
    <HomeLayout>
      {projects.map(project =>
        project.hasOwnProperty("url") ? (
          <div key={project.id}>
            <HasUrlCard project={project} />
          </div>
        ) : (
          <div key={project.id}>
            <NoUrlCard project={project} />
          </div>
        )
      )}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    projects: allMdx(
      filter: { frontmatter: { featured: { eq: "y" } } }
      sort: { frontmatter: { sortDate: DESC } }
    ) {
      nodes {
        id
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
          title
          url
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
