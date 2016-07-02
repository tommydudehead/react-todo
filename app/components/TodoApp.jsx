var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid= require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
    todos: [
      {
        id: uuid(),
        text: 'Walk the dog'
      },
      {
        id: uuid(),
        text: 'Clean the yard'
      },
      {
        id: uuid(),
        text: 'Make lunch'
      },
      {
        id: uuid(),
        text: 'Check mail'
      }
    ]
  }
  },
  handleAddToDo: function(text) {
    
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:uuid()  ,
          text: text
        }
      ]
    });
  },
  handleSearch: function showCompleted(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.ToLowerCase()
    });
  },
  render: function (){
    var {todos} = this.state;

    return (
      <div>
        <p>To do list</p>
        <ToDoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
