var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
         uid: action.uid
    };
    case 'LOGOUT':
    return {}; // we just need to return an empty object to clear everything
    default:
      return state;
  }
};

export var questionsReducer = (state = false, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS': // this updates the state. and the render methods mean that the view then automatically updates, i think at least.
      return [
        ...state,
        ...action.questions // actions.todos is the todos object passed in from the action that calls this. which is called addToDo
      ];
      case 'ADD_QUESTION':
        return [
          ...state,
          action.question
        ];
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];

    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS': // this updates the state. and the render methods mean that the view then automatically updates, i think at least.
      return [
        ...state,
        ...action.todos // actions.todos is the todos object passed in from the action that calls this. which is called addToDo
      ];

    default:
      return state;
  }
};
