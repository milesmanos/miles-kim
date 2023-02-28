import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { css } from "@emotion/css"
import { colors } from "../../styles/colors"
import { text } from "../../styles/text"
import { breakpoint } from "../../styles/layout"
import Header from "../../components/header"
import Seo from "../../components/seo"
import BackToHomeButton from "../../components/backToHomeButton"
import { Spacers } from "../../styles/spacers"
import Footer from "../../components/footer"

const hero = css`
  height: 100vh;
  background-color: ${colors.black.darkest};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 24px;
`

const gatsbyImg = css`
  max-height: 100%;
  img {
    max-height: 100%;
    border-radius: 2px;
  }
`

const mainBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 24px;
    gap: 48px;
    width: 100%;
    max-width: 1000px;
  }
  div.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;
    ${breakpoint} {
      grid-template-columns: 1fr;
    }
  }
`

const titleSty = css`
  ${text.complete.lg};
  font-weight: 500;
  color: ${colors.black.darkest};
`

const descSty = css`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  div.row {
    display: flex;
    gap: 16px;
  }
  div.label {
    color: ${colors.black.secondary};
    width: 50px;
    flex-shrink: 0;
  }
`

const ArtProject = ({ data, location }) => {
  const { title, startDate, description, size, thumb } =
    data.artProject.frontmatter
  const image = getImage(thumb)
  const alt = title

  console.log("ORIGINPAGE:", location.state)

  return (
    <div>
      <Header isClear />
      <div className={hero}>
        <GatsbyImage
          image={image}
          alt={alt}
          className={gatsbyImg}
          objectFit="contain"
        />
      </div>
      <div className={mainBody}>
        <div className="container">
          <div className="content">
            <div className={titleSty}>{title}</div>
            <div className={descSty}>
              <div className="row">
                <div className="label">type</div>
                {description}
              </div>
              <div className="row">
                <div className="label">size</div>
                {size}
              </div>
              <div className="row">
                <div className="label">date</div>
                {startDate}
              </div>
            </div>
          </div>
          <Spacers.Vertical._0px />
          <BackToHomeButton originPage={location.state} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    artProject: mdx(id: { eq: $id }) {
      frontmatter {
        description
        title
        startDate
        size
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.artProject.frontmatter.title} />
)

export default ArtProject
