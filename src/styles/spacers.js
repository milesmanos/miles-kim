import { css } from "@emotion/react"
import React from "react"

const noFlexShrink = css`
  flex-shrink: 0;
`

const width4px = css`
  width: 4px;
`

const height0px = css`
  height: 0px;
`
const height4px = css`
  height: 4px;
`
const height8px = css`
  height: 8px;
`
const height48px = css`
  height: 48px;
`
const height64px = css`
  height: 64px;
`
const height96px = css`
  height: 96px;
`

export const Spacers = {
  Horizontal: {
    _4px: () => <div css={[noFlexShrink, width4px]} />,
  },
  Vertical: {
    _0px: () => <div css={[noFlexShrink, height0px]} />,
    _4px: () => <div css={[noFlexShrink, height4px]} />,
    _8px: () => <div css={[noFlexShrink, height8px]} />,
    _48px: () => <div css={[noFlexShrink, height48px]} />,
    _64px: () => <div css={[noFlexShrink, height64px]} />,
    _96px: () => <div css={[noFlexShrink, height96px]} />,
  },
}
