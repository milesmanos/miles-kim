import { css, cx } from "linaria"
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
    _4px: () => <div className={cx(noFlexShrink, width4px)} />,
  },
  Vertical: {
    _0px: () => <div className={cx(noFlexShrink, height0px)} />,
    _4px: () => <div className={cx(noFlexShrink, height4px)} />,
    _8px: () => <div className={cx(noFlexShrink, height8px)} />,
    _48px: () => <div className={cx(noFlexShrink, height48px)} />,
    _64px: () => <div className={cx(noFlexShrink, height64px)} />,
    _96px: () => <div className={cx(noFlexShrink, height96px)} />,
  },
}
