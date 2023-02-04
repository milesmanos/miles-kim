import * as React from "react"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"

// Hello again Miles! File Structure:
// - Home: index.js (layout in HomeLayout.js)
// - Projects List: /components/ProjectsList.js
// - Project queries: /templates/project-details.js
// - Project layouts: /components/ProjectLayout.js

const IndexPage = () => {
  return (
    <HomeLayout>
      <div>Ello govna</div>
      <div>Ello govna</div>
      <div>Ello govna</div>
    </HomeLayout>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
