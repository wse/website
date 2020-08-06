/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, deletePage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/post.js`)
  const blogPostSocialImageTemplate = require.resolve(
    `./src/templates/post-social-image.js`,
  )

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })

      if (process.env.NODE_ENV === 'development') {
        createPage({
          path: `${node.frontmatter.slug}/seo`,
          component: blogPostSocialImageTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
          },
        })
      }
    })
  })
}
