import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Seo from "../../components/seo"

const ArtProject = ({ data }) => {
  const project = data.artProject
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
    artProject: mdx(id: { eq: $id }) {
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

export default ArtProject
