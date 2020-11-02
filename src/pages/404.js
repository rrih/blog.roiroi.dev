import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404" />
      <div className="container px-0">
        <article className="border my-3 m-md-3 p-3 shadow">
        <header>
          <div className="h2">404</div>
        </header>
        <section>
          のっとふぁうんどなのです
        </section>
        </article>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
