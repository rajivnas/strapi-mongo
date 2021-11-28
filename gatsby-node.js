const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const teamTemplate = path.resolve(`./src/templates/teamTemplate.js`)

  const res = await graphql(`
    query MySlug {
      allStrapiTeams(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allStrapiTeams.edges.forEach(edge => {
    createPage({
      component: teamTemplate,
      path: `/team/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
