import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import { Link, graphql } from "gatsby"
import FooterTags from "../components/FooterTags";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const Tags = ({ location, pageContext, data }) => {
    const { tag } = pageContext
    // 一旦使わないのでコメントアウト
    const { edges/*, totalCount*/ } = data.allMarkdownRemark
    const group = data.allPost.group
    const tags = []
    group.forEach(gr => {
        tags.push(gr.fieldValue)
    })
    const H3 = styled.h3`
        font-family: var(--bs-font-sans-serif)
    `

    // console.log(totalCount)
    // console.log(tags)
    return (
        <Layout location={location} title={tag}>
            <SEO
                title={`${tag}`}
                description={`${tag}のタグがつけられたページ`}
            />
            <div className="flex-wrap container px-0 pb-4 mx-md-4 pr-md-5 px-3 px-sm-5 px-md-0">
                <H3 className="mx-4 mx-md-0 text-center my-3 pt-4"><FontAwesomeIcon icon={fas.faTags} /> {tag}</H3>
                <ul className="ml-0 pl-0">
                    {edges.map(({ node }) => {
                        const { slug } = node.fields
                        const { title } = node.frontmatter
                        return (
                            <li key={slug} className="list-unstyled mb-0">
                                <Link
                                    to={slug}
                                    className="text-decoration-none"
                                >
                                    {title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <FooterTags tags={tags} />
            </div>
        </Layout>
    )
}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        tags
                    }
                }
            }
        }
        allPost: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                        date(formatString: "YYYY年MM月DD日")
                        title
                        description
                        tags
                    }
                }
            }
        }
    }
`

// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//     group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//     }
//     edges {
//       node {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "YYYY年MM月DD日")
//           title
//           description
//           tags
//         }
//       }
//     }
//   }