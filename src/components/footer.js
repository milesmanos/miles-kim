import { css } from "@emotion/css"
import React from "react"
import { colors } from "../styles/colors"
import { text } from "../styles/text"

const navLayout = css`
  ${text.complete.sm}
  width: 100%;
  padding: 16px 24px;
  color: ${colors.black.secondary};
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <div className={navLayout}>
      <div style={{ fontWeight: "500" }}>Miles Kim</div>
      <div>milesarthurkim@gmail.com</div>
    </div>
  )
}

export default Footer
