var React= require('react');
var ReactDOM= require('react-dom');
var TestUtils= require('react-addons-test-utils');
var expect= require('expect');
var $= require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onaddtodo prop with valid data', () => {
    var todoText = 'check mail';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value= todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onaddtodo prop with invalid data (eg empty value)', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todoText.value= todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoText);
  });
});
