var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('aasasasasa'));
store.dispatch(actions.setSearchText('aasa'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

//app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
