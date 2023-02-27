import React from "react"
import { Link, navigate } from "gatsby"
import Button from "../components/button"
import { CloseSVG } from "../icons/CloseSVG"

const BackToHomeButton = ({ originPage }) => {
  if (originPage) {
    return (
      <Button
        isFullWidth
        svg={<CloseSVG size={16} />}
        onClick={() => navigate(-1)}
      >
        Back to {originPage.originPage}
      </Button>
    )
  } else {
    return (
      <Link style={{ width: "100%" }} to="/">
        <Button isFullWidth svg={<CloseSVG size={16} />}>
          Home
        </Button>
      </Link>
    )
  }
}

export default BackToHomeButton
