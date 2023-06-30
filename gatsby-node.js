const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage(filter: { synlighet: { customSida: { ne: true } } }) {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const {
    data: {
      allWpProgrampunkt: { nodes: allProgram },
    },
  } = await graphql(`
    query {
      allWpProgrampunkt {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/page-template.js`)
  const programTemplate = path.resolve(`./src/templates/program-template.js`)

  allPages.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
      defer: true,
    })
  })
  allProgram.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.uri,
      // specify the component template of your choice
      component: slash(programTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
  })
}
