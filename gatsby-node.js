const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const config = require(`./src/utils/siteConfig`);
const { paginate } = require(`gatsby-awesome-pagination`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Posts
   */
  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`);
    resolve(
      graphql(`
        {
          allGhostPost(
            sort: { order: ASC, fields: published_at }
          ) {
            edges {
              node {
                slug
                primary_tag {
                  name
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        if (!result.data.allGhostPost) {
          return resolve();
        }

        const items = result.data.allGhostPost.edges;

        _.forEach(items, ({ node }) => {
          createPage({
            path: `/blog/${node.slug}/`,
            component: path.resolve(postTemplate),
            context: {
              slug: node.slug,
            },
          });
        });

        return resolve();
      })
    );
  });

  return Promise.all([createPosts]);
};
