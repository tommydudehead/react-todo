export var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length >0) {
      this.refs.todoText.value='';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function () {

    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
          <input type="text" ref="todoText" placeholder="Add a new to do"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    )
  }
});


export default connect()(AddTodo);
