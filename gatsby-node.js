const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // ページネーション関数を作成
  const buildPagination = posts => {
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      // 2ページ目以降はURLに /page が付与されるよう設定する
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
      component: path.resolve('src/templates/index.js')
    })
  }

  return graphql(`
        {
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    tags
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges
        // buildPagination の実行
        buildPagination(posts)
      })

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
