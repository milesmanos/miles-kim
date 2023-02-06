import * as React from "react"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"

import "../styles/global.css"
import "../styles/normalize.css"
import Tabs from "./tabs"

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const mainBody = css`
  width: 100%;
  max-width: 1000px;
  padding: 104px 24px 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

const HomeLayout = ({ children }) => {
  return (
    <div css={pageWrapper}>
      <Header />
      <div css={mainBody}>
        <Tabs />
        {children}
      </div>
    </div>
  )
}

export default HomeLayout
