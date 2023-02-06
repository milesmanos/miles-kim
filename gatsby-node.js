exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type MdxFrontmatter implements Node {
        title: String!
        preview: String
        featured: String

        category: String
        description: String

        length: String
        size: String
        place: String

        stardDate: String
        endDate: String
        sortDate: Date

        slug: String
        url: String
      }
    `
  createTypes(typeDefs)
}
