// /tags ページ
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Utilities
import kebabCase from "lodash/kebabCase"

// /tags/ページは不要なので一旦コメントアウト
// const TagsPage = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title;

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO
// 	title={"Tags"}
// 	description={"All tags."}
//       />
//       <article>
// 	<h2>All Tags</h2>
// 	<ul>
// 	  {data.allMarkdownRemark.group.map(tag => (
// 	    <li key={tag.fieldValue}>
// 	      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
// 		{tag.fieldValue} ({tag.totalCount})
// 	      </Link>
// 	    </li>
// 	  ))}
// 	</ul>
//       </article>
//     </Layout>
//   )
// }

// export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
	fieldValue
	totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
        }
      }
    }
  }
`