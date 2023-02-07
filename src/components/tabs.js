import { Link } from "gatsby"
import { css, cx } from "@emotion/css"
import React from "react"
import { colors } from "../styles/colors"
import { breakpoint } from "../styles/layout"

const row = css`
  display: flex;
  gap: 8px;
  ${breakpoint} {
    flex-direction: column;
  }
`

const link = css`
  border: 1px solid ${colors.line.light};
  color: ${colors.black.secondary};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 99px;
  @media (hover: hover) {
    :hover {
      border: 1px solid ${colors.black.secondary};
      color: ${colors.black.darkest};
    }
  }

  div.ellipse {
    border-radius: 99px;
    width: 8px;
    height: 8px;
  }
  div.red {
    background-color: ${colors.red};
  }
  div.green {
    background-color: ${colors.green};
  }
  div.blue {
    background-color: ${colors.blue};
  }
`

const redLink = css`
  @media (hover: hover) {
    :hover {
      border: 1px solid ${colors.red};
      color: ${colors.red};
    }
  }
  :active {
    background-color: ${colors.red};
    color: white;
    border: 1px solid ${colors.red};
    div.ellipse {
      background-color: white;
    }
    /* Match class activeDesign */
  }
`
const greenLink = css`
  @media (hover: hover) {
    :hover {
      border: 1px solid ${colors.green};
      color: ${colors.green};
    }
  }
  :active {
    background-color: ${colors.green};
    color: white;
    border: 1px solid ${colors.green};
    div.ellipse {
      background-color: white;
    }
    /* Match class activeArt */
  }
`
const blueLink = css`
  @media (hover: hover) {
    :hover {
      border: 1px solid ${colors.blue};
      color: ${colors.blue};
    }
  }
  :active {
    background-color: ${colors.blue};
    color: white;
    border: 1px solid ${colors.blue};
    div.ellipse {
      background-color: white;
    }
    /* Match class activeWriting */
  }
`

// active classes
const activeAny = css`
  color: white;
  @media (hover: hover) {
    :hover {
      color: white;
    }
  }
  :active {
    color: white;
  }
`
const activeFeatured = css`
  background-color: ${colors.black.darkest};
  color: white;
  border: 1px solid ${colors.black.darkest};
  div.ellipse {
    background-color: white;
  }
`
const activeDesign = css`
  background-color: ${colors.red};
  color: white;
  border: 1px solid ${colors.red};
  div.ellipse {
    background-color: white;
  }
`
const activeArt = css`
  background-color: ${colors.green};
  color: white;
  border: 1px solid ${colors.green};
  div.ellipse {
    background-color: white;
  }
`
const activeWriting = css`
  background-color: ${colors.blue};
  color: white;
  border: 1px solid ${colors.blue};
  div.ellipse {
    background-color: white;
  }
`

const AllProjectsSVG = () => (
  <svg width="18" height="24" viewBox="0 0 18 24">
    <path
      d="M2.75 20C2 20 1.35417 19.7292 0.8125 19.1875C0.270833 18.6458 0 18 0 17.25C0 16.5 0.270833 15.8542 0.8125 15.3125C1.35417 14.7708 2 14.5 2.75 14.5C3.5 14.5 4.14583 14.7708 4.6875 15.3125C5.22917 15.8542 5.5 16.5 5.5 17.25C5.5 18 5.22917 18.6458 4.6875 19.1875C4.14583 19.7292 3.5 20 2.75 20Z"
      fill="currentColor"
    />
    <path
      d="M7.0625 8.6875C7.60417 9.22917 8.25 9.5 9 9.5C9.75 9.5 10.3958 9.22917 10.9375 8.6875C11.4792 8.14583 11.75 7.5 11.75 6.75C11.75 6 11.4792 5.35417 10.9375 4.8125C10.3958 4.27083 9.75 4 9 4C8.25 4 7.60417 4.27083 7.0625 4.8125C6.52083 5.35417 6.25 6 6.25 6.75C6.25 7.5 6.52083 8.14583 7.0625 8.6875Z"
      fill="currentColor"
    />
    <path
      d="M13.3125 19.1875C13.8542 19.7292 14.5 20 15.25 20C16.0167 20 16.6667 19.7292 17.2 19.1875C17.7333 18.6458 18 18 18 17.25C18 16.5 17.7333 15.8542 17.2 15.3125C16.6667 14.7708 16.0167 14.5 15.25 14.5C14.5 14.5 13.8542 14.7708 13.3125 15.3125C12.7708 15.8542 12.5 16.5 12.5 17.25C12.5 18 12.7708 18.6458 13.3125 19.1875Z"
      fill="currentColor"
    />
  </svg>
)

export default function Tabs() {
  return (
    <div className={row}>
      <Link
        className={link}
        activeClassName={cx(activeAny, activeFeatured)}
        to="/"
      >
        Featured
        <AllProjectsSVG />
      </Link>
      <Link
        className={cx(link, redLink)}
        activeClassName={cx(activeAny, activeDesign)}
        to="/design/"
      >
        Design
        <div className={cx("ellipse", "red")} />
      </Link>
      <Link
        className={cx(link, greenLink)}
        activeClassName={cx(activeAny, activeArt)}
        to="/art/"
      >
        Art
        <div className={cx("ellipse", "green")} />
      </Link>
      <Link
        className={cx(link, blueLink)}
        activeClassName={cx(activeAny, activeWriting)}
        to="/writing/"
      >
        Writing
        <div className={cx("ellipse", "blue")} />
      </Link>
    </div>
  )
}
