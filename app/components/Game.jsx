var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import QuestionList from 'QuestionList';
import AddQuestion from 'AddQuestion';



export var Game = React.createClass({
  render: function () {


    return (
      <div>
        <p>A test from game</p>
        <AddQuestion/>
        <QuestionList/>
      </div>
    )
  }
});

export default connect()(Game);
