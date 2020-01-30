import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/Postitem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="CAT"
      date="30 de janeiro de 2020"
      timeToRead="5"
      title="Titutlo"
      description="desriçãoskagagjkdjg"
    />
  </Layout>
)

export default IndexPage
