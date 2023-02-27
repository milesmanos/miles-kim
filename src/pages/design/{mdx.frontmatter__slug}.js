import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Seo from "../../components/seo"

const DesignProject = ({ data }) => {
  const project = data.designProject
  const image = getImage(project.frontmatter.thumb)
  const alt = project.frontmatter.title

  return (
    <div>
      <div>{project.frontmatter.title}</div>
      <GatsbyImage image={image} alt={alt} />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    designProject: mdx(
      id: { eq: $id }
      frontmatter: { category: { eq: "design" } }
    ) {
      frontmatter {
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default DesignProject
