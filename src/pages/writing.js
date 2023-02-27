import * as React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"

const WritingPage = ({ data }) => {
  const projects = data.writingProjects.nodes

  return (
    <HomeLayout>
      {projects.map(project => (
        <ProjectCard originPage="Writing" project={project} />
      ))}
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    writingProjects: allMdx(
      filter: {
        frontmatter: { category: { eq: "writing" }, featured: { eq: "y" } }
      }
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

export const Head = () => <Seo title="Writing"></Seo>

export default WritingPage
