exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type MdxFrontmatter implements Node {
        preview: String!
        endDate: String!
        length: String!
        url: String!
      }
    `
  createTypes(typeDefs)
}
