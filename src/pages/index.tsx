// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const H2Title = styled.div`
  color: dark;
  font-size: 50px;
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="" />
      <div className="mx-4">
        <div className="border-bottom">
          <H2Title>
            rrih
          </H2Title>
          紙を折り続けて死ぬ
        </div>
        <div className="border-bottom">
          <div className="h3">リンク</div>
          <ul>
            <li className="list-unstyled mb-0">
              GitHub: <a href="https://github.com/rrih">@rrih</a>
            </li>
            <li className="list-unstyled mb-0">
              ブログ: <Link to="/posts">記事一覧</Link>
            </li>
            <li className="list-unstyled mb-0">
              wantedly: <a href="https://www.wantedly.com/id/rrih">リンク</a>
            </li>
          </ul>
        </div>
        <div className="border-bottom">
          <div className="h3">連絡先</div>
          <ul>
            <li className="list-unstyled mb-0">
              メールアドレス: rsklvあっとicloud.com
            </li>
          </ul>
        </div>
        <div className="border-bottom">
          <div className="h3">web</div>
          <ul>
            <li className="list-unstyled mb-0">
              <a href="https://rrih.github.io/kyugyo">https://rrih.github.io/kyugyo</a>
            </li>
            店舗の休業情報を集約するやつ
            <li className="list-unstyled mb-0">
              <a href="http://rrih.github.io/sparkle-of-life">http://rrih.github.io/sparkle-of-life</a>
            </li>
            いのちのかがやき
            <li className="list-unstyled mb-0">
              <a href="https://feel-prod.herokuapp.com">https://feel-prod.herokuapp.com</a>
            </li>
            お気持ちを表明するサイト
            <li className="list-unstyled mb-0">
              <a href="https://rrih.github.io/cakephp-baked-code-formatter/">https://rrih.github.io/cakephp-baked-code-formatter/</a>
            </li>
            コードを形成するやつ
          </ul>
        </div>
        <div className="border-bottom">
          <div className="h3">使用技術</div>
          <ul>
            <li className="list-unstyled mb-0">CakePHP/PHP</li>
            <li className="list-unstyled mb-0">MySQL</li>
            <li className="list-unstyled mb-0">HTML/CSS/JavaScript</li>
          </ul>
        </div>
        <div className="border-bottom">
          <div className="h3">aboutme</div>
          <ul>
            <li className="list-unstyled mb-0"> 
              <div className="h4">居場所</div>
              <ul>
                <li className="list-unstyled">群馬 || 都内</li>
              </ul>
            </li>
            <li className="list-unstyled">
              <div className="h4">career</div>
              <ul>
                <li className="list-unstyled mb-0">2017年4月〜2021年3月 東京電機大学理工学部理工学科</li>
                <li className="list-unstyled mb-0">2019年3月〜2020年7月 某社 webエンジニア, インターン</li>
                <li className="list-unstyled mb-0">2020年9月〜現在 某社, 開発部 インターン</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      {/* TODO 一旦コメントアウト。トップページからは一時的に隠す。アドセンスが通ったら解除する */}
      {/* <div className="flex-wrap container px-0 pb-4 mx-md-4">
        <div className="h3 mx-4 mx-md-0">misc</div>
        <ul>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li key={node.fields.slug} className="list-unstyled mb-0">
              <header className="text-wrap">
                <Link to={node.fields.slug} className="text-decoration-none">
                  {title}
                </Link>
              
                <small>{node.frontmatter.date} 公開</small>
              </header>
            </li>
          )
        })}
        </ul>
      </div> */}
    </Layout>
  )
}

export default BlogIndex

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
