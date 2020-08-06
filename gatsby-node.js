/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const puppeteer = require('puppeteer')

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

      createPage({
        path: `${node.frontmatter.slug}/seo`,
        component: blogPostSocialImageTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })

      const screenshot = async function (url, imagePath) {
        const browser = await puppeteer.launch({ headless: false, timeout: 0 })
        const page = await browser.newPage()
        await page.goto(url)
        await page.screenshot({ path: imagePath })
        await browser.close()
      }

      let url = `http://localhost:8000${node.frontmatter.slug}/seo`
      if (node.frontmatter.slug.includes('minimalist')) {
        console.log('::::::::::::::::::HERE:::::::::::::::::::::')
        console.log(url)
        await screenshot(url, `src/social-images${node.frontmatter.slug}.png`)
      }
      // Create Screenshots for social images
      // deletePage({
      //   path: `${node.frontmatter.slug}/seo`,
      //   component: blogPostSocialImageTemplate,
      // })
    })
  })
}
