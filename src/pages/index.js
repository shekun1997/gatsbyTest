import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Item from "../components/item"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
    style={{
      background: `yellow`,
    }}>
      <Item>asd</Item>
      <Item>esa</Item>
      <Item>sad</Item>
      <Item>dsa</Item>
      <Item>asd</Item>
    </div>
  </Layout>
)

export default IndexPage
