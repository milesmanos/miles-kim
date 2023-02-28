import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { css } from "@emotion/css"
import { colors } from "../../styles/colors"
import { text } from "../../styles/text"
import Header from "../../components/header"
import Seo from "../../components/seo"
import BackToHomeButton from "../../components/backToHomeButton"
import { Spacers } from "../../styles/spacers"
import Button from "../../components/button"
import { ExternalLinkSVG } from "../../icons/ExternalLinkSVG"
import { breakpoint } from "../../styles/layout"
import Footer from "../../components/footer"

const isHiddenMobile = css`
  ${breakpoint} {
    display: none;
  }
`
const isShownMobile = css`
  display: none;
  ${breakpoint} {
    display: block;
  }
`

const mainBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* space for header */
  padding-top: 56px;
  min-height: 100vh;
  div.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    padding: 48px 24px;
    width: 100%;
    gap: 48px;
    ${breakpoint} {
      grid-template-columns: 1fr;
    }
  }
`

const titleSty = css`
  ${text.complete.lg};
  font-weight: 500;
  color: ${colors.black.darkest};
  width: 100%;
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
  /* border-radius: 2px; */
  /* box-shadow: 0 1px 12px 0 ${colors.line.dark}; */
  /* img {
    border-radius: 2px;
  } */
`

const imageSection = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const longDescription = css`
  font-size: 18px;
  line-height: 28px;
  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 28px;
    strong {
      font-weight: 500;
    }
  }
  h2 {
    color: ${colors.black.secondary};
    :not(:first-child) {
      margin-top: 32px;
    }
  }
  max-width: 700px;
`

const DesignProject = ({ data, location, children }) => {
  const {
    title,
    type,
    startDate,
    endDate,
    thumb,
    image1,
    image2,
    image3,
    image4,
    url,
  } = data.designProject.frontmatter
  const imageThumb = getImage(thumb)
  const imageOne = getImage(image1)
  const imageTwo = getImage(image2)
  const imageThree = getImage(image3)
  const imageFour = getImage(image4)
  const alt = title

  const TitleSection = () => (
    <>
      {/* <div className={divider} />
      <Spacers.Vertical._8px /> */}
      <div className={titleSty}>
        <div className="iotas">
          {type} / {startDate}&nbsp;{endDate}
        </div>
        <Spacers.Vertical._8px />
        {title}
      </div>
    </>
  )
  const DescriptionSection = () => (
    <div className={longDescription}>{children}</div>
  )
  const ButtonsSection = () => (
    <div>
      {url && (
        <Button isFullWidth svg={<ExternalLinkSVG size={16} />}>
          <a href={url} target="_blank" rel="noreferrer">
            Vist {title}
          </a>
        </Button>
      )}
      <BackToHomeButton originPage={location.state} />
    </div>
  )

  return (
    <div>
      <Header />
      <div className={mainBody}>
        <div className="container">
          <div className={imageSection}>
            <div className={isShownMobile}>
              <TitleSection />
            </div>
            <GatsbyImage image={imageThumb} alt={alt} className={gatsbyImg} />
            <div className={isShownMobile}>
              <DescriptionSection />
            </div>
            <GatsbyImage image={imageOne} alt={alt} className={gatsbyImg} />
            <GatsbyImage image={imageTwo} alt={alt} className={gatsbyImg} />
            <GatsbyImage image={imageThree} alt={alt} className={gatsbyImg} />
            <GatsbyImage image={imageFour} alt={alt} className={gatsbyImg} />
          </div>
          <div>
            <div className={isHiddenMobile}>
              <TitleSection />
              <Spacers.Vertical._48px />
              <DescriptionSection />
            </div>
            <Spacers.Vertical._48px />
            <ButtonsSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    designProject: mdx(id: { eq: $id }) {
      frontmatter {
        type
        title
        startDate
        endDate
        url
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
        image1 {
          childImageSharp {
            gatsbyImageData
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData
          }
        }
        image3 {
          childImageSharp {
            gatsbyImageData
          }
        }
        image4 {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.designProject.frontmatter.title} />
)

export default DesignProject
