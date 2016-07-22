var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Todo} = require('Todo');
var {Nav} = require('Nav');
var {Game} = require('Game');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';

store.dispatch(actions.startGetQuestions());
store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="nav" component={Nav}/>
        <Route path="game" component={Game} />
        <IndexRoute component={TodoApp}/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('app')
);
