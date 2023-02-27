import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css, cx } from "@emotion/css"
import React from "react"
import { colors } from "../styles/colors"
import { breakpoint } from "../styles/layout"
import { text } from "../styles/text"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import { OpenSVG } from "../icons/OpenSVG"
import { Link } from "gatsby"
import Button from "./button"

// Link wrapper (contains all hover action):
const projectLink = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 4px;
  border: none;
  margin-top: -1px;
  div.linkButton {
    ${text.complete.xs};
    gap: 6px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 5px;
    color: ${colors.black.secondary};
    background-color: ${colors.bg.light};
    @media (hover: hover) {
      :hover {
        color: ${colors.black.darkest};
        div.linkButton {
          color: ${colors.black.primary};
        }
      }
    }
    :active {
      color: ${colors.black.secondary};
      div.linkButton {
        color: ${colors.black.secondary};
        background-color: ${colors.bg.dark};
      }
    }
  }
  div.readMoreLink {
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        color: ${colors.black.primary};
      }
    }
    :active {
      color: ${colors.black.barely};
    }
  }
  div.info {
    color: ${colors.black.secondary};
  }
`

// Sections:
const projectHeader = css`
  border-top: 1px solid ${colors.line.light};
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  ${text.complete.sm};
  div.title {
    ${text.complete.md};
    color: ${colors.black.darkest};
    font-weight: 500;
  }
`
const projectThumb = css`
  display: flex;
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 ${colors.line.dark};
  img {
    border-radius: 2px;
  }
`
const projectBody = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 48px;
  ${breakpoint} {
    flex-direction: column;
    gap: 24px;
  }
`
const iotas = css`
  display: flex;
  flex-direction: column;
  width: 225px;
  flex-shrink: 0;
  gap: 8px;
  ${breakpoint} {
    width: 100%;
  }
`

const ProjectCard = ({ project }) => {
  const image = getImage(project.frontmatter.thumb)
  const alt = project.frontmatter.title

  const ProjectContent = ({ svg, linkText }) => (
    <div className={projectLink} key={project.id}>
      <div className={projectHeader}>
        <div className="title">{project.frontmatter.title}</div>
        {project.frontmatter.url ? (
          <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
            <div className="linkButton">
              {linkText}
              {svg}
            </div>
          </a>
        ) : (
          <div className="linkButton">
            {linkText}
            {svg}
          </div>
        )}
      </div>
      <div className={projectBody}>
        {project.frontmatter.thumb ? (
          <GatsbyImage image={image} alt={alt} className={projectThumb} />
        ) : (
          <div style={{ width: "100%" }}>
            {project.frontmatter.preview}
            <div className="info">...</div>
          </div>
        )}
        <div className={cx(iotas, "info")}>
          {project.frontmatter.url ? (
            <div className="readMoreLink">
              {project.frontmatter.description}{" "}
              <span>
                <Link
                  to={
                    project.frontmatter.category +
                    "/" +
                    project.frontmatter.slug
                  }
                  state={{ originPage: "Home" }}
                >
                  <Button isInline>Read More</Button>
                </Link>
              </span>
            </div>
          ) : (
            project.frontmatter.description
          )}

          {project.frontmatter.length && (
            <div>{project.frontmatter.length}</div>
          )}
          {project.frontmatter.size && <div>{project.frontmatter.size}</div>}
          <div style={{ display: "inline-block" }}>
            {project.frontmatter.startDate}&nbsp;
            {project.frontmatter.endDate}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {project.frontmatter.url ? (
        <ProjectContent
          linkText="Visit link"
          svg={<ExternalLinkSVG size={16} />}
        />
      ) : (
        <Link
          to={project.frontmatter.category + "/" + project.frontmatter.slug}
          state={{ originPage: "Home" }}
        >
          <ProjectContent linkText="Open project" svg={<OpenSVG size={16} />} />
        </Link>
      )}
    </>
  )
}

export default ProjectCard
