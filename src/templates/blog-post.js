import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle} className="d-md-block">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container">
        <article className="border m-3 p-3 d-md-block">
          <header>
            <div
              className="h2"
            >
              {post.frontmatter.title}
            </div>
            <p
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section className="ml-md-2" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav className="d-md-block ml-md-5">
          <ul
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
        description
      }
    }
  }
`
