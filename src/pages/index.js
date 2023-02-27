import * as React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"

// Hello again Miles! File Structure:
// - Home: index.js (layout in HomeLayout.js)
// - Projects List: /components/projectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/projectLayout.js

const IndexPage = ({ data }) => {
  const projects = data.projects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <ProjectCard project={project} />
      ))}
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
