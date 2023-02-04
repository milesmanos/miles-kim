import * as React from "react"
import { css } from "@emotion/react"
import { colors } from "../styles/colors"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const mainBody = css`
  max-width: 1000px;
  padding: 104px 24px 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

const divider = css`
  height: 1px;
  color: ${colors.line.light};
`

const HomeLayout = ({ children }) => {
  return (
    <div css={pageWrapper}>
      <Header />
      <div css={mainBody}>
        {children}
        <StaticImage src="../images/icon.png" />
        <div css={divider} />
      </div>
    </div>
  )
}

export default HomeLayout
