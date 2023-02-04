import * as React from "react"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"

const DesignPage = () => {
  return (
    <HomeLayout>
      <div>Ello govna</div>
      <div>Ello govna</div>
      <div>Ello govna</div>
    </HomeLayout>
  )
}

export const Head = () => <Seo title="Design"></Seo>

export default DesignPage
