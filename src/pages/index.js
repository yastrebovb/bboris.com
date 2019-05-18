import React from "react"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/Image"
import SEO from "../components/Seo/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hey there !👋</h1>
    <p>
      Hey there *waves*, my name is Gil, designer, teacher and skateboarder.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
