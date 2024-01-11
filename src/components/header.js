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
  span.designer {
    font-weight: 500;
    color: ${colors.red};
  }
  span.artist {
    font-weight: 500;
    color: ${colors.green};
  }
  span.writer {
    font-weight: 500;
    color: ${colors.blue};
  }
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
                <StaticImage
                  src="../images/shroommates.jpg"
                  alt="Me"
                  // aspectRatio={1 / 1}
                  className={profPic}
                />
                <div className={infoText}>
                  <div>
                    I’m a user interface designer, artist, and writer based in
                    Brooklyn.
                  </div>
                  <div>
                    As a <span className="designer">designer</span>, I’m a
                    generalist who thrives in the “0 to 1” stage. I help
                    founders develop their brand identity, product vision, and
                    copy. I’ve founded a couple companies, been hired early at
                    others, and freelanced.
                  </div>
                  <div>
                    As an <span className="artist">artist</span>, I’m an
                    on-and-off painter and photographer who enjoys the chaos of
                    physical media. I graduated Yale class of 2020 with a B.A.
                    in studio art.
                  </div>
                  <div>
                    As a <span className="writer">writer</span>, I’m still
                    developing my voice. My main outlet is a Substack newsletter
                    called Long Life, and I’ve published a few essays and poems.
                    On top of my thesis in painting, I wrote a collection of
                    poetry as an unofficial thesis, under the supervision of
                    Nobel laureate Louise Glück.
                  </div>
                  <div>
                    I’m always looking for new and interesting projects in all
                    domains – please reach out to me if you want to work
                    together!
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
