import { graphql } from "gatsby"
import * as React from "react"
import HomeLayout from "../components/homeLayout"
import Seo from "../components/seo"

const DesignPage = ({ data }) => {
  return (
    <HomeLayout>
      {data.allFile.nodes.map(node => (
        <li key={node.name}>{node.name}</li>
      ))}
    </HomeLayout>
  )
}

export const Head = () => <Seo title="Design"></Seo>

export default DesignPage
