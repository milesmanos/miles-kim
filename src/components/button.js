import { css } from "@emotion/react"
import React from "react"
import { colors } from "../styles/colors"
import { text } from "../styles/text"

const buttonSty = css`
  ${text.complete.sm};
  cursor: pointer;
  padding: 10px 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.line.light};
    margin-bottom: -1px;
    gap: 4px;
  }

  @media (hover: hover) {
    :hover {
      div {
        border-bottom: 1px solid ${colors.line.dark};
        color: ${colors.black.darkest};
      }
    }
  }

  :active {
    div {
      border-bottom: 1px solid ${colors.line.light};
      color: ${colors.black.secondary};
    }
  }
`

// modifiers
const dark = css`
  border-bottom: 1px solid #494949;
  color: white;
  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid #808080;
    }
  }

  :active {
    border-bottom: 1px solid #494949;
    color: #b5b5b5;
  }
`
const alwaysPrimaryText = css`
  color: ${colors.black.primary};
`
const fullWidth = css`
  justify-content: space-between;
  width: 100%;
`
const noUnderline = css`
  border: none;
  color: inherit;
  @media (hover: hover) {
    :hover {
      border: none;
      color: inherit;
    }
  }
  :active {
    border: none;
  }
`

const Button = ({
  children,
  isLightbox,
  isFullWidth,
  isNoUnderline,
  isDisabled,
  isBlack,
  onClick,
}) => {
  return (
    <button
      css={[
        buttonSty,
        isLightbox && dark,
        isFullWidth && fullWidth,
        isNoUnderline && noUnderline,
        isBlack && alwaysPrimaryText,
      ]}
      disabled={isDisabled}
      onClick={onClick}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button
