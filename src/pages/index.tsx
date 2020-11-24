// Gatsby supports TypeScript natively!
import React, { useRef } from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { toast } from 'react-toastify';
import ReactTooltip from "react-tooltip";
import moment from "moment";
library.add(fas, far, fab)

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
  color: #f8f9fa;
  font-size: 120px;
  font-family: ヒラギノ角ゴ Std W8;

// 横回転からのホバー時に素早く縦回転
  animation:rotate-y 2s infinite;
  -webkit-animation:rotate-y 2s infinite;
  @keyframes rotate-y{
    0%{transform:rotateY(0deg);}
    100%{transform:rotateY(360deg);}
  }
  @-webkit-keyframes rotate-x{
    0%{-webkit-transform:rotateY(0deg);}
    100%{-webkit-transform:rotateY(360deg);}
  }

  &:hover {
    animation: rollkAnime 0.1s linear infinite;
    @keyframes rollkAnime{
      50% {
        color: #f8f9fa;
        transform: rotateX(180deg);
      }
      100% {
        color: #f8f9fa;
        transform: rotateX(360deg);
      }
    }
  }
`

const LinkIcon = styled.a`
  color: #f8f9fa;
  font-size: 70px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #f8f9fa;
  }
`

const TechIcon = styled.div`
  font-size: 70px;
`

const TechFont = styled.div`
  font-size: 10px;
`

const Email = styled.div`
  font-size: 70px;
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const birthday = moment('1997/09/11', 'YYYY/MM/DD') // 誕生日
  const today = moment()
  const age = today.diff(birthday, 'years')

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="rrih" />
      <div className="mx-4 text-center">
        <div className="border-bottom py-3" data-tip={`${age}歳。ただの開発者`}>
          <H2Title>
            rrih
          </H2Title>
          <ReactTooltip effect="float" type="dark" place="bottom" />
        </div>
        <div className="border-bottom py-5 d-flex justify-content-around">
          <div>
            <LinkIcon href="https://github.com/rrih" data-tip="公開してるコードは大したものないです">
              <FontAwesomeIcon icon={fab.faGithub} />
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </LinkIcon>
          </div>
          <div>
            <LinkIcon href="https://twitter.com/rrih_dev" data-tip="無益な情報を発信するアカウント">
              <FontAwesomeIcon icon={fab.faTwitter} />
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </LinkIcon>
          </div>
          <div>
            <LinkIcon href="/posts"  data-tip="メモ書き">
              <FontAwesomeIcon icon={fas.faPen} />
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </LinkIcon>
          </div>
        </div>
        <div className="border-bottom py-5">
          <Email data-tip="rsklv[at]icloud.com">
            <FontAwesomeIcon icon={far.faEnvelope} />
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </Email>
        </div>
        <div className="py-5">
          <div className="d-flex justify-content-around">
            <TechIcon data-tip="今メインで触ってます(´･_･`)ぜんぜんわからないです">
              <FontAwesomeIcon icon={fab.faPhp} />
              {/* <ReactTooltip effect="float" type="info" place="right" /> */}
            </TechIcon>
            <TechIcon data-tip="少しだけ実務経験あり(´･_･`)ぜんぜんわからないです">
              <FontAwesomeIcon icon={fab.faReact} />
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </TechIcon>
            <TechIcon data-tip="少しだけ実務経験あり(´･_･`)ぜんぜんわからないです">
              <FontAwesomeIcon icon={fab.faNode} />
              {/* <ReactTooltip effect="float" type="info" place="top" /> */}
            </TechIcon>
            <TechIcon data-tip="学習中(´･_･`)ぜんぜんわからないです">
              <FontAwesomeIcon icon={fab.faDocker} />
              {/* <ReactTooltip effect="float" type="info" place="left" /> */}
            </TechIcon>
          </div>
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
