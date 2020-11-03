import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "@fortawesome/fontawesome-svg-core/styles.css";

// fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  // console.log(location.href)
  return (
    <Layout location={location} title={siteTitle} className="d-md-block">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container px-0">
        <article className="border my-3 m-md-3 p-3 shadow blog-posts">
          <header className="mb-4">
            <div
              className="h2"
            >
              {post.frontmatter.title}
            </div>
            <p
            >
              {post.frontmatter.date}公開
            </p>
          </header>
          <hr />
          <section className="ml-md-2" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          {/* シェア */}
          <div className="share-zone">
            <div className="h3 text-center">シェアする</div>
            <div className="border rounded px-2 px-md-5 py-2 text-center">
              <div>
                <a className="btn btn-dark text-light rounded-pill w-100 my-2" href={`http://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}`}>Twitter</a>
              </div>
              <div>
                <a className="btn btn-dark text-light rounded-pill w-100 my-2" href={`http://www.facebook.com/sharer/sharer.php?u=${location.href}&t=${post.frontmatter.title}`}>Facebook</a>
              </div>
            </div>
          </div>
          
        </article>

        <nav className="d-md-flex justify-content-between">
          <div className="my-2">
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className="btn btn-dark">
              <span role="img" aria-labelledby="right">👉</span> {previous.frontmatter.title}
            </Link>
          )}
          </div>
          
          <div className="my-2">
          {next && (
            <Link to={next.fields.slug} rel="next" className="btn btn-dark">
              {next.frontmatter.title} <span role="img" aria-labelledby="left">👈</span>
            </Link>
          )}
          </div>
          
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
        date(formatString: "YYYY年MM月DD日")
        description
      }
    }
  }
`
