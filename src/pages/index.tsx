// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

// import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
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

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="" />
      <div className="mx-4">
        <div className="border-bottom">
          <div className="h2">
            rrih
          </div>
          紙を折り続けて死ぬ
        </div>
        <div className="border-bottom">
          <div className="h3">リンク</div>
          <ul>
            <li className="list-unstyled mb-0">
              GitHub: <a href="https://github.com/rrih">@rrih</a>
            </li>
            <li className="list-unstyled mb-0">
              ブログ: <a href="https://rrih.github.io/">https://rrih.github.io/</a>
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
                <li className="list-unstyled">群馬、たまに都内</li>
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
            
            <li className="list-unstyled mb-0">
              <div className="h4">興味/関心/趣味領域</div>
              <ul>
                <li className="list-unstyled mb-0">
                  <a href="https://www.origami-noa.jp/%E3%81%8A%E3%82%8A%E3%81%8C%E3%81%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E3%81%8A%E3%82%8A%E3%81%8C%E3%81%BFq-a/#:~:text=%E8%BF%91%E5%B9%B4%E3%81%AF%E3%80%81%E6%96%B0%E3%81%97%E3%81%84%E6%8A%98%E3%82%8A%E6%96%B9,%E5%89%B5%E4%BD%9C%E6%8A%98%E3%82%8A%E7%B4%99%E3%80%8D%E3%81%A8%E3%81%84%E3%81%84%E3%81%BE%E3%81%99%E3%80%82">
                    創作折り紙
                  </a>
                </li>
                <li className="list-unstyled mb-0">
                  <a href="https://ja.wikipedia.org/wiki/Web%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0#%E3%82%B5%E3%83%BC%E3%83%90%E3%82%B5%E3%82%A4%E3%83%89">
                    web dev
                  </a>
                </li>
                <li className="list-unstyled mb-0">甘いもの</li>
                <li className="list-unstyled mb-0">珈琲</li>
                <li className="list-unstyled mb-0"><a href="https://www.monsterenergy.com/">Monster Energy</a></li>
                <li className="list-unstyled mb-0">お酒</li>
                <li className="list-unstyled mb-0">Apple devise</li>
                <li className="list-unstyled mb-0">より良い睡眠</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex-wrap container px-0 pb-4 mx-md-4">
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
      </div>
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
