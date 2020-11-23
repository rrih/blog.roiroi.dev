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
  animation: rollkAnime 2s linear infinite;
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
  font-size: 30px;
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="rrih" />
      <div className="mx-4 text-center">
        <div className="border-bottom py-3">
          <H2Title>
            rrih
          </H2Title>
        </div>
        <div className="border-bottom py-5 d-flex justify-content-around">
          <div>
            <LinkIcon href="https://github.com/rrih">
              <FontAwesomeIcon icon={fab.faGithub} />
            </LinkIcon>
          </div>
          <div>
            <LinkIcon href="https://twitter.com/rrih_dev">
              <FontAwesomeIcon icon={fab.faTwitter} />
            </LinkIcon>
          </div>
          <div>
            <LinkIcon href="/posts">
              <FontAwesomeIcon icon={fas.faPen} />
            </LinkIcon>
          </div>
        </div>
        <div className="border-bottom py-5">
        <Email>
          <FontAwesomeIcon icon={far.faEnvelope} /> rsklv[at]icloud.com
        </Email>
        </div>
        <div className="border-bottom py-5">
          <div className="d-flex justify-content-around">
            <TechIcon>
              <FontAwesomeIcon icon={fab.faPhp} />
            </TechIcon>
            <TechIcon>
              <FontAwesomeIcon icon={fab.faReact} />
            </TechIcon>
            <TechIcon>
              <FontAwesomeIcon icon={fab.faNode} />
            </TechIcon>
            <TechIcon>
              <FontAwesomeIcon icon={fab.faDocker} />
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
