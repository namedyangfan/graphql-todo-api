const { ApolloServer, gql } = require('apollo-server');
const { TodoAPI } = require('./datasource');
const { typeDefs } = require('./schema/todo');
const { resolvers} = require( './resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    TodoAPI: new TodoAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});