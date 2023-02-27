import { css, cx } from "@emotion/css"
import React from "react"
import { colors } from "../styles/colors"
import { text } from "../styles/text"

const buttonSty = css`
  ${text.complete.sm};
  cursor: pointer;
  padding: 10px 20px;

  div.inner {
    border-bottom: 1px solid ${colors.line.light};
    margin-bottom: -1px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
  }
  div.text {
    display: flex;
    flex-grow: 1;
  }
  div.svg {
    display: flex;
    color: ${colors.black.barely};
  }
  @media (hover: hover) {
    :hover {
      div.inner {
        border-bottom: 1px solid ${colors.line.dark};
      }
      div.text {
        color: ${colors.black.darkest};
      }
      div.svg {
        color: ${colors.black.primary};
      }
    }
  }

  :active {
    div.inner {
      border-bottom: 1px solid ${colors.line.light};
    }
    div.text {
      color: ${colors.black.secondary};
    }
    div.svg {
      color: ${colors.black.secondary};
    }
  }
`

// modifiers
const lightbox = css`
  div.text {
    color: white;
  }
  div.inner {
    border-bottom: 1px solid #494949;
  }

  @media (hover: hover) {
    :hover {
      div.text {
        color: white;
      }
      div.inner {
        border-bottom: 1px solid #808080;
      }
    }
  }

  :active {
    div.inner {
      color: #b5b5b5;
      border-bottom: 1px solid #494949;
    }
  }
`
const fullWidth = css`
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px;
`
const inline = css`
  padding: 0px;
  color: inherit;
`
const noUnderline = css`
  color: inherit;
  div.text {
    border: none;
  }
  @media (hover: hover) {
    :hover {
      color: inherit;
      div.text {
        border: none;
      }
    }
  }
  :active {
    div.text {
      border: none;
    }
  }
`

const Button = ({
  children,
  isLightbox,
  isFullWidth,
  isInline,
  isNoUnderline,
  isDisabled,
  onClick,
  svg,
}) => {
  return (
    <button
      className={cx(
        buttonSty,
        isLightbox && lightbox,
        isFullWidth && fullWidth,
        isInline && inline,
        isNoUnderline && noUnderline
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      <div className="inner">
        <div className="text">{children}</div>
        {svg && <div className="svg">{svg}</div>}
      </div>
    </button>
  )
}

export default Button
