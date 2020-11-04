// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Data } from "."

const Blog = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
        <Layout location={location} title={siteTitle}>
        <SEO title="記事一覧" />
        <div className="flex-wrap container px-0 pb-4 mx-md-4 text-center">
            <div className="h3 mx-4 mx-md-0 text-center my-3">ブログ</div>
            {/* TODO 手で書くのはやめよう。流石に */}
            {/* <ul>
                <li className="list-unstyled mb-0">
                    <header className="text-wrap">
                        <small>2020年11月04日 公開　</small>
                        <Link to="/ignore-files">GitHub Pagesで公開するGatsbyのSPAにおいて.gitignoreで無視するべきファイル</Link>
                    </header>
                </li>
                <li className="list-unstyled mb-0">
                    <header className="text-wrap">
                        <small>2020年11月03日 公開　</small>
                        <Link to="/must-learn-app">業務で書いている膨大なアプリケーションを素早くざっと理解する</Link>
                    </header>
                </li>
            </ul> */}
            まだ記事が投稿されていません
        </div>
        </Layout>
    )
}

export default Blog

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
