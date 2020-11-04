// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Data } from "."

const Articles = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout location={location} title={siteTitle}>
        <SEO title="記事一覧" />
        <div className="flex-wrap container px-0 pb-4 mx-md-4">
            <div className="h3 mx-4 mx-md-0 text-center my-3">記事一覧</div>
            <ul>
            {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <li key={node.fields.slug} className="list-unstyled mb-0">
                <header className="text-wrap">
                  <small>{node.frontmatter.date} 公開　</small> 
                    <Link to={node.fields.slug} className="text-decoration-none">
                    {title}
                    </Link>
                </header>
                </li>
            )
            })}
            </ul>
        </div>
        </Layout>
    )
}

export default Articles

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
          }
        }
      }
    }
  }
`
