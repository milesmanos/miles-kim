import * as React from "react"
import { css } from "@emotion/css"
import Header from "./header"

import "../styles/global.css"
import "../styles/normalize.css"
import Tabs from "./tabs"
import Footer from "./footer"

const pageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const mainBody = css`
  width: 100%;
  max-width: 1000px;
  padding: 104px 24px 72px 24px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  gap: 72px;
`

const HomeLayout = ({ children }) => {
  return (
    <div className={pageWrapper}>
      <Header />
      <div className={mainBody}>
        <Tabs />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
