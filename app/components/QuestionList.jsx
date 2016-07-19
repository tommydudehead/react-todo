var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var QuestionList = React.createClass({
  render: function () {
    var {questions, todos, showCompleted, searchText} = this.props;
    var renderQuestions = () => {
      if (questions.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      console.log("the length is " + questions.length);
    
        return TodoAPI.filterQuestions(questions, showCompleted, searchText).map((question) => {
        return (
          <Todo key={question.id} {...question}/>
        );
      });
    };

    return (
      <div>
        {renderQuestions()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(QuestionList);
