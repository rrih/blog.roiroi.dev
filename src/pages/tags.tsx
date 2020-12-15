// ビルドエラーがでるため、一応残しておく。いつか抹消する
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={"全てのタグ"}
        description={"全てのタグ"}
      />
      <div className="flex-wrap container px-0 pb-4 mx-md-4 pr-md-5 px-3 px-sm-5 px-md-0">
        <div className="h3 mx-4 mx-md-0 text-center my-3 pt-4">
          <FontAwesomeIcon icon={fas.faTags} /> 全てのタグ
        </div>
        <div className="my-2 d-flex flex-wrap">
          {data.allMarkdownRemark.group.map(tag => (
          <div key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="m-1 text-decoration-none text-dark bg-light rounded px-1 text-nowrap">
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TagsPage

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