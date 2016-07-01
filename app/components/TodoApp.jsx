var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
    todos: [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      },
      {
        id: 3,
        text: 'Make lunch'
      },
      {
        id: 4,
        text: 'Check mail'
      }
    ]
  }
  },
  render: function (){
    var {todos} = this.state;

    return (
      <div>
        <p>a test paragraph</p>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
