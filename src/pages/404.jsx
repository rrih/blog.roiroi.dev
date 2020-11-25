import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../images/syukatsu_naitei_no_man.png";

const NotFoundPage = ({ data, location }) => {
  const BlogPostSquareCard = styled.div`
    border-radius: 40px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  `

  const H1NotFound = styled.h1`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 60px;
    color: #f8f9fa;
    background-color: #212529;
    border-radius: 40px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  `

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404" />
      <div className="container px-0">
        <BlogPostSquareCard className="border my-3 m-md-3 p-3 shadow text-center">
          <header className="mt-5">
            <H1NotFound>404</H1NotFound>
          </header>
          <section className="mb-5">
            <img className="mb-0" src={Img} alt="rrih-avatar-url" width={400}/><br />
            お探しのページがみつかりませんでした
            <br />
            <a className="text-decoration-none" href="/posts">トップへ戻る</a>
          </section>
        </BlogPostSquareCard>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
