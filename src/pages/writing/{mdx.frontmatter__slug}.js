import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { css, cx } from "@emotion/css"
import { colors } from "../../styles/colors"
import { text } from "../../styles/text"
import Header from "../../components/header"
import Seo from "../../components/seo"
import BackToHomeButton from "../../components/backToHomeButton"
import { Spacers } from "../../styles/spacers"
import Footer from "../../components/footer"

const mainBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* space for header */
  padding-top: 56px;
  div.container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 24px;
    width: 100%;
    max-width: 700px;
  }
`

const titleSty = css`
  ${text.complete.lg};
  font-weight: 500;
  color: ${colors.black.darkest};
  width: 100%;
  div.divider {
    flex-grow: 1;
    height: 1px;
    background-color: ${colors.line.light};
  }
  div.iotas {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    ${text.complete.xs}
    font-weight: 400;
    color: ${colors.black.barely};
  }
`

const gatsbyImg = css`
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 ${colors.line.dark};
  img {
    border-radius: 2px;
  }
`

const mainText = css`
  margin-top: 84px;
  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 28px;
    strong {
      font-weight: 500;
    }
  }
  h2 {
    ${text.complete.md};
    color: ${colors.black.darkest};
    font-weight: 500;
    margin-bottom: 28px;
    :not(:first-child) {
      margin-top: 56px;
    }
  }
`

const essayFirstLine = css`
  ::first-line {
    font-weight: 500;
    /* color: ${colors.black.darkest}; */
  }
`

const WritingProject = ({ data, location, children }) => {
  const { title, description, startDate, thumb } =
    data.writingProject.frontmatter
  const image = getImage(thumb)
  const alt = title

  return (
    <div>
      <Header />
      <div className={mainBody}>
        <div className="container">
          <div className={titleSty}>
            <div className="iotas">
              {description}, {startDate}
              <div className="divider"></div>
            </div>
            <Spacers.Vertical._8px />
            {title}
          </div>
          <div
            className={cx(description === "Essay" && essayFirstLine, mainText)}
          >
            {children}
          </div>
          {thumb && (
            <>
              <Spacers.Vertical._48px />
              <GatsbyImage image={image} alt={alt} className={gatsbyImg} />
            </>
          )}
          <Spacers.Vertical._96px />
          <BackToHomeButton originPage={location.state} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    writingProject: mdx(
      id: { eq: $id }
      frontmatter: { category: { eq: "writing" } }
    ) {
      frontmatter {
        description
        title
        startDate
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

export default WritingProject
