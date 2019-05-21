
const resolvers = {
    Query: {
      todo: (root, { id }, { dataSources }) => dataSources.TodoAPI.getTodo(id),
      todos: (root, args, { dataSources }) => dataSources.TodoAPI.getTodos(),
    },
    Todo: {
      title: ({ title }) => title,
      completed: ({ completed }) => completed,
    },
  };

module.exports = {resolvers}