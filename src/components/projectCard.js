import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css, cx } from "@emotion/css"
import React from "react"
import { colors } from "../styles/colors"
import { breakpoint } from "../styles/layout"
import { text } from "../styles/text"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import { OpenSVG } from "../icons/OpenSVG"
import { Link } from "gatsby"

// Link wrapper (contains all hover action):
const projectLink = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 4px;
  border: none;
  margin-top: -1px;
  div.icon {
    display: flex;
    color: ${colors.line.dark};
  }
  div.inherit {
    color: ${colors.black.secondary};
  }
  @media (hover: hover) {
    :hover {
      color: ${colors.black.darkest};
      div.icon {
        color: ${colors.black.primary};
      }
    }
  }
  :active {
    color: ${colors.black.secondary};
    div.icon {
      color: ${colors.line.dark};
    }
  }
`

// Sections:
const projectHeader = css`
  border-top: 1px solid ${colors.line.light};
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  const ProjectContent = ({ svg }) => (
    <div className={projectLink} key={project.id}>
      <div className={projectHeader}>
        <div className="title">{project.frontmatter.title}</div>
        <div className="icon">{svg}</div>
      </div>
      <div className={projectBody}>
        {project.frontmatter.thumb ? (
          <GatsbyImage image={image} alt={alt} className={projectThumb} />
        ) : (
          <div style={{ width: "100%" }}>
            {project.frontmatter.preview}
            <div className="inherit">...</div>
          </div>
        )}
        <div className={cx(iotas, "inherit")}>
          <div>{project.frontmatter.description}</div>
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
        <a href={project.frontmatter.url} target="_blank" rel="noreferrer">
          <ProjectContent svg={<ExternalLinkSVG size={24} />} />
        </a>
      ) : (
        <Link
          to={project.frontmatter.category + "/" + project.frontmatter.slug}
          state={{ originPage: "Home" }}
        >
          <ProjectContent project={project} svg={<OpenSVG size={24} />} />
        </Link>
      )}
    </>
  )
}

export default ProjectCard
