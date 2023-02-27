import * as React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"

const DesignPage = ({ data }) => {
  const projects = data.designProjects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <ProjectCard originPage="Design" project={project} />
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    designProjects: allMdx(
      filter: { frontmatter: { category: { eq: "design" } } }
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

export const Head = () => <Seo title="Design"></Seo>

export default DesignPage
