import * as React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"

import "../styles/global.css"
import "../styles/normalize.css"

const ArtPage = ({ data }) => {
  const projects = data.artProjects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <ProjectCard originPage="Art" project={project} />
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    artProjects: allMdx(
      filter: { frontmatter: { category: { eq: "art" } } }
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

export const Head = () => <Seo title="Art"></Seo>

export default ArtPage
