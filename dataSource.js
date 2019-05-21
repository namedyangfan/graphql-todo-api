const { RESTDataSource } = require('apollo-datasource-rest') 

class TodoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getTodo(id) {
    const result = await this.get('todos', {
      id
    });
    return result[0];
  }

  async getTodos() {
    const result = await this.get('todos');
    return result;
  }
};

module.exports = {TodoAPI}