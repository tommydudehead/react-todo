var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');

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
  handleAddToDo: function(text) {
    alert('new todo: '+ text);
  },
  render: function (){
    var {todos} = this.state;

    return (
      <div>
        <p>To do list</p>
        <TodoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
