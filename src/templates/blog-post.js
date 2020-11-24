import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import axios from "axios";
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShareSns } from "../utils/share-sns";
// import "@fortawesome/fontawesome-svg-core/styles.css";

// fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const BlogPostSquareCard = styled.div`
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  `


  const [avatarIcon, setAvatarIcon] = useState();
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const getUserWithGitHub = async () => {
    await axios.get('https://api.github.com/users/rrih')
      .then((res) => {
        const au = <img className="mb-0 rounded-pill" src={res.data.avatar_url} alt="rrih-avatar-url" width={100}/>
        setAvatarIcon(au);
      });
  };
  useEffect(() => {
    getUserWithGitHub();
  }, []);
  return (
    <Layout location={location} title={siteTitle} className="d-md-block">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container px-0">
        <BlogPostSquareCard className="my-3 m-md-3 p-3 shadow">
          <header className="">
            <small>> <a href="/posts">記事一覧</a> > <a href={location.href}>{post.frontmatter.title}</a></small>
            <h2
              className="my-3"
            >
              {post.frontmatter.title}
            </h2>
              {post.frontmatter.date}公開
          </header>
          <hr />
          <section className="ml-md-2" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          {/* シェア */}
          <div className="share-zone shadow rounded border">
            <div className="h5 text-center m-0 p-2 rounded-top border-bottom">Share</div>
            <div className="rounded-bottom px-2 px-md-5 py-2 text-center">
              {/* <div>
                <a className="btn btn-outline-primary rounded-pill w-100 my-2 shadow text-decoration-none" href={`http://twitter.com/intent/tweet?url=${location.href !== 'undefined' ? location.href : null}&text=${post.frontmatter.title}&via=rrih_dev`}>Twitter</a>
              </div>
              <div>
                <a className="btn btn-outline-light rounded-pill w-100 my-2 shadow text-decoration-none" href={`https://www.facebook.com/sharer/sharer.php?u=${location.href !== 'undefined' ? location.href : null}&t=${post.frontmatter.title}`}>Facebook</a>
              </div> */}
              {typeof location.href !== 'undefined' && location.href &&
              <ShareSns articleUrl={location.href} articleTitle={post.frontmatter.title} />}
            </div>
          </div>

          {/* この記事を書いた人 */}
          <div className="this-article-author my-4 border rounded shadow">
            <div className="h5 text-center bg-dark text-light rounded-top p-2 border-bottom">Administrator</div>
            <div className="p-3 d-flex justify-content-around align-items-center">
              <div className="py-3 pl-md-3 d-sm-none">
                <a href="https://github.com/rrih" target="_blank" className="shadow" rel="noopener noreferrer">{avatarIcon}</a>
              </div>
              <div className="py-3 d-none d-sm-block">
                <a href="https://github.com/rrih" target="_blank" className="shadow" rel="noopener noreferrer">{avatarIcon}</a>
              </div>
              
              <div className="pl-3 py-3" style={{minWidth: "200px"}}>
                <div className="h5">rrih</div>
                {/* スマホのみ表示 */}
                <div className="d-sm-none">
                  <small>
                  某大学4年生。なにもわかっていない人です。
                  </small>
                  <div className="d-flex my-2">
                    <div className="mr-1 mr-md-3"><a href="https://twitter.com/rrih_dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-4 py-2 shadow text-decoration-none"><small>Twitter</small></a></div>
                    {/* 一旦 GitHub アカウントはコメントアウト */}
                    {/* <div className="mr-3"><a href="https://github.com/rrih" target="_blank" className="btn btn-outline-dark rounded-pill px-4 py-2 shadow"><small>GitHub</small></a></div> */}
                  </div>
                </div>
                {/* sm以上表示 */}
                <div className="d-none d-sm-block">
                  某大学4年生。なにもわかっていない人です。
                  <div className="d-flex my-2">
                    <div className="mr-1 mr-md-3"><a href="https://twitter.com/rrih_dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary rounded-pill px-4 py-2 shadow text-decoration-none">Twitter</a></div>
                    {/* 一旦 GitHub アカウントはコメントアウト */}
                    {/* <div className="mr-3"><a href="https://github.com/rrih" target="_blank" className="btn btn-outline-dark rounded-pill px-4 py-2 shadow">GitHub</a></div> */}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </BlogPostSquareCard>

        <nav className="d-md-flex justify-content-between p-2">
          <div className="my-2">
          {previous && (
            <div className="mx-2">
              <span role="img" aria-labelledby="right">←</span>
              <div>
                <Link to={previous.fields.slug} rel="prev" className="btn btn-outline-light w-100 shadow p-3 text-decoration-none">
                  {previous.frontmatter.title}
                </Link>
              </div>
            </div>
          )}
          </div>
          
          <div className="my-2">
          {next && (
            <div className="mx-2">
              <div className="text-right">→</div>
              <div>
                <Link to={next.fields.slug} rel="next" className="btn btn-outline-light w-100 shadow p-3 text-decoration-none">
                  {next.frontmatter.title}
                </Link>
              </div>
            </div>
          )}
          </div>
        </nav>
        <div className="text-center pb-2">
          <a href="/posts">記事一覧へ戻る</a>
        </div>
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
