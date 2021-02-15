const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type ProfileAuthor {
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
    writer_id: Int
    category_id: Int
    title: String
    description: String
    photo: String
  }
  type Categories {
    id: Int
    category: String
  }
  type Users {
    username: String
    email: String
    password: String
    role: String
  }
  type UserSignin {
    token: String
  }
  type Todos {
    user_id: Int
    title: String
    description: String
  }

  type Query {
    hello: String
    profileAuthor: ProfileAuthor

    writers: [Writer]
    writerById(id: Int!): Writer
    categories: [Categories]
    books: [Book]

  }

  type Mutation {
    createCategory(category: String!): Categories
    updateCategory(id: Int!, category: String!): Categories
    deleteCategory(id: Int!): Categories

    createWriter(full_name: String!, email: String!, photo: String!): Writer
    updateWriter(id: Int!, full_name: String!, email: String!, photo: String!): Writer
    deleteWriter(id: Int!): Writer

    createBook(writer_id: Int!, category_id:Int!, title: String!, description: String!, photo: String!): Book
    updateBook(id: Int!,writer_id: Int!, category_id:Int!, title: String!, description: String!, photo: String!): Book
    deleteBook(id: Int!): Book

    signupAdmin(username: String!, email:String!, password: String!, role: String!): Users
    signupGuest(username: String!, email:String!, password: String!): Users
    signin(username: String!, password: String!): UserSignin

    createTodo(userId:Int!,title:String!,description:String!):Todos
    updateTodo(id: Int!,userId:Int!,title:String!,description:String!): Todos
    deleteTodo(id: Int!): Todos
  }
 
`;

module.exports = typeDefs;
