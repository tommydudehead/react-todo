var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos; // return so that people can see if failed or not. if failed returns nothing otherwiuse returns the array
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos); // check it is a valid object or array
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []; // if is an array pass code after question mark, else after colon
  }
};
