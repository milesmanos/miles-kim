import { css } from "@emotion/css"
import { Link } from "gatsby"
import React from "react"
import { colors } from "../styles/colors"
import { text } from "../styles/text"

const navLayout = css`
  ${text.complete.sm}
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
`

const footerButton = css`
  color: ${colors.black.barely};
  cursor: pointer;
  @media (hover: hover) {
    :hover {
      color: ${colors.black.secondary};
    }
  }
`

const Footer = () => {
  return (
    <div className={navLayout}>
      <Link to="/" className={footerButton} style={{ fontWeight: "500" }}>
        Miles Kim
      </Link>
      <a href="mailto: milesarthurkim@gmail.com" className={footerButton}>
        milesarthurkim@gmail.com
      </a>
    </div>
  )
}

export default Footer
