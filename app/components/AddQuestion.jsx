var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddQuestion = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var questionText = this.refs.questionText.value;

    if (questionText.length > 0) {
      this.refs.questionText.value = '';
      dispatch(actions.startAddQuestion(questionText));
    } else {
      this.refs.questionText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="questionText" placeholder="Add a new question here"/>
          <button className="button expanded">Add Question</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddQuestion);
