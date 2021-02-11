const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Use {
    name: String
    addr: String
  }
  type Writer {
    full_name: String
    email: String
    photo: String
    books:[Book]
  }
  type Book {
    writer_id: String
    category_id: String
    title: String
    description: String
    photo: String
  }
  type Categories {
    id: Int
    category: String
  }
  type Query {
    hello: String
    users: Use
    writers: [Writer]
    categories: [Categories]
    writerById(id: Int!): Writer
    books: [Book]
  }

  type Mutation {
    createCategory(category: String!): Categories
    updateCategory(id: Int!, category: String!): Categories
  }
 
`;

module.exports = typeDefs;
