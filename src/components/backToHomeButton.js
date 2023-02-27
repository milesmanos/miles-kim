import React from "react"
import { Link, navigate } from "gatsby"
import Button from "../components/Button"
import { CloseSVG } from "../icons/CloseSVG"

const BackToHomeButton = ({ originPage }) => {
  if (originPage) {
    return (
      <Button isFullWidth onClick={() => navigate(-1)}>
        <div className="text">Back to {originPage.originPage}</div>
        <div className="icon">
          <CloseSVG size={16} />
        </div>
      </Button>
    )
  } else {
    return (
      <Link style={{ width: "100%" }} to="/">
        <Button isFullWidth>
          <div className="text">Home</div>
          <div className="icon">
            <CloseSVG size={16} />
          </div>
        </Button>
      </Link>
    )
  }
}

export default BackToHomeButton
