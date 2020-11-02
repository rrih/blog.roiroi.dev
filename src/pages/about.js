import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
    // const siteTitle = data.site.siteMetadata.title

    return (
    <Layout>
        <SEO title="about" />
        <div className="container px-0">
            <article className="border my-3 m-md-3 p-3 shadow">
                <header>
                    <div className="h2">あばうとぺーじ</div>
                </header>
                <section>
                    ろいです！
                </section>
            </article>
        </div>
    </Layout>
    )
}

export default About