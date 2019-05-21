const { ApolloServer, gql } = require('apollo-server') 

const typeDefs = gql`
  type Todo {
    userId: Int!,
    id: Int!,
    title: String!,
    completed: Boolean!
  }

  type Query {
    todo(id: Int!): Todo
    todos: [Todo!]!
  }
`;

module.exports = {typeDefs}