import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css, cx } from "@emotion/css"
import React, { useState } from "react"
import { CloseSVG } from "../icons/CloseSVG"
import { ExternalLinkSVG } from "../icons/ExternalLinkSVG"
import { colors } from "../styles/colors"
import { breakpoint } from "../styles/layout"
import { text } from "../styles/text"
import Button from "./button"
import { CopySVG } from "../icons/CopySVG"
import { CheckSVG } from "../icons/CheckSVG"
import { Spacers } from "../styles/spacers"

const navLayout = css`
  ${text.complete.sm}
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.93);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  z-index: 1;
  color: ${colors.black.darkest};
`

const flexGrow = css`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`

const miles = css`
  flex-grow: 0;
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
`

// options
const clear = css`
  background-color: rgba(255, 255, 255, 0);
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  color: white;
`

// info box
const infoOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
const mockNav = css`
  position: sticky;
  background-color: white;
  display: flex;
  align-items: center;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 4px;
  color: ${colors.black.darkest};
`
const clickOutToClose = css`
  height: 100vh;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.25);
`
const infoBox = css`
  position: relative;
  background-color: white;
  width: 500px;
  ${breakpoint} {
    width: 100%;
  }
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: auto;
`
const infoContent = css`
  padding: 32px 24px 24px 24px;
  color: ${colors.black.primary};
  display: flex;
  flex-direction: column;
  gap: 48px;
`
const infoText = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const buttonGroup = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${colors.black.secondary};
  div.buttonRow {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  div.label {
    width: 40px;
    flex-shrink: 0;
  }
`
const profPic = css`
  border-radius: 2px;
`

const Header = ({ isClear }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [copiedText, setCopiedText] = useState("")

  const handleOpenInfo = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden"
    setShowInfo(true)
  }
  const handleCloseInfo = () => {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll"
    setShowInfo(false)
  }

  return (
    <div className={cx(navLayout, isClear && clear)}>
      <div className={flexGrow}>
        <Link to="/" className={miles}>
          Miles Kim
        </Link>
      </div>
      <Button isLightbox={isClear} onClick={() => handleOpenInfo()}>
        Info
      </Button>

      {/* Info */}
      {showInfo && (
        <>
          <div className={infoOverlay}>
            <button
              className={clickOutToClose}
              onClick={() => handleCloseInfo()}
            >
              {" "}
            </button>
            <div className={infoBox}>
              <div className={mockNav}>
                <div className={flexGrow}>
                  <Link to="/" className={miles}>
                    Miles Kim
                  </Link>
                </div>
                <Button onClick={() => handleCloseInfo()}>
                  <div>Close</div>
                </Button>
              </div>
              <div className={infoContent}>
                <div className={infoText}>
                  <div>
                    ... designs interfaces, lives in San Francisco, writes
                    often, paints sometimes. Loves music, surfing, hiking, and
                    nature docs.
                  </div>
                  <div>
                    Graduated Yale class of 2020 with a B.A. in studio art. Has
                    worked as a designer, copywriter, and (sometimes) frontend
                    developer for startups over the past couple of years.
                    Thoughtful, focused designs with no frills.
                  </div>
                  <div>
                    Is always looking for new ways to think and create, is
                    itching for new projects.
                  </div>
                </div>
                <div className={buttonGroup}>
                  <div className="buttonRow">
                    <div className="label">email</div>
                    <Button
                      isFullWidth
                      onClick={() => {
                        setCopiedText("milesarthurkim@gmail.com")
                        navigator.clipboard.writeText(
                          "milesarthurkim@gmail.com"
                        )
                        setTimeout(() => {
                          setCopiedText("")
                        }, 2000)
                      }}
                      isDisabled={copiedText === "milesarthurkim@gmail.com"}
                      svg={
                        copiedText === "milesarthurkim@gmail.com" ? (
                          <CheckSVG size={16} />
                        ) : (
                          <CopySVG size={16} />
                        )
                      }
                    >
                      {copiedText === "milesarthurkim@gmail.com"
                        ? "Copied – can’t wait!"
                        : "milesarthurkim@gmail.com"}
                    </Button>
                  </div>
                  <div className="buttonRow">
                    <div className="label">read</div>
                    <a
                      href="https://mileskim.substack.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ width: "100%" }}
                    >
                      <Button isFullWidth svg={<ExternalLinkSVG size={16} />}>
                        mileskim.substack.com
                      </Button>
                    </a>
                  </div>
                </div>

                <StaticImage
                  src="../images/shroommates.jpg"
                  alt="Me"
                  // aspectRatio={1 / 1}
                  className={profPic}
                />
                <Spacers.Vertical._0px />
                <Button
                  isFullWidth
                  svg={<CloseSVG size={16} />}
                  onClick={() => handleCloseInfo()}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
