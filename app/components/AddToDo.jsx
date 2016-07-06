var React = require('react');

var AddToDo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length >0) {
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText);
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

module.exports=AddToDo;
