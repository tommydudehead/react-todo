var React = require('react');
var TodoList = require('TodoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
        <ToDoSearch onSearch={"this.handleSearch"}/>
        <TodoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
