const baseProps = {
  fontSize: {
    lg: "32px",
    md: "24px",
    sm: "16px",
    xs: "14px",
  },
  lineHeight: {
    lg: "48px",
    md: "32px",
    sm: "24px",
    xs: "16px",
  },
}

export const text = {
  ...baseProps,
  complete: {
    lg: `
        font-size: ${baseProps.fontSize.lg};
        line-height: ${baseProps.lineHeight.lg};
    `,
    md: `
        font-size: ${baseProps.fontSize.md};
        line-height: ${baseProps.lineHeight.md};
    `,
    sm: `
        font-size: ${baseProps.fontSize.sm};
        line-height: ${baseProps.lineHeight.sm};
    `,
    xs: `
        font-size: ${baseProps.fontSize.xs};
        line-height: ${baseProps.lineHeight.xs};
    `,
  },
}
