import moment from 'moment';

import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS', // gets called from the startAddTodos method below. This then fires the ADD_TODOS reducer
    todos
  };
};

export var startAddTodos = () => { // gets called initially from the app.jsx file when the app loads up.
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`); // get reference to correct part of DB

    return todosRef.once('value').then((snapshot) => { // get the data from the above part of the DB .then is the promise that runs on successfully getting the data from the db
      var todos = snapshot.val() || {}; // set the results from db to the todos var. or if there is no data in db, set it to an empty object
      var parsedTodos = []; // parsedtodos is the version of the data that will be in the correct format for the app. we initialise it here to an empty array

      Object.keys(todos).forEach((todoId) => { // there is a difference in how we store the data in the app compared to how firebase stores it. This method will return the id for each item in to todos object. we have decided to call this result todoId
        parsedTodos.push({ // parsedTodos (the empty array created above) will now get one element pushed for each element in the todos object. we need to add the id for each object to within each object in the new array. because firebase stores the ID  outside of the objects themselve so this just allows us to pass the id inside of the object
          id: todoId, // as mentioned above, the id is populated here from the object.keys method. also as i mentioned this runs for each element in original object
          ...todos[todoId] // using ES6 destructoring, we get each other item from the original array. and we use the id in todoit to get this data from the correct elements from the original array. actually it isnt really an array but an object.
        });
      });

      dispatch(addTodos(parsedTodos)); // then we run the original addtodos method, passing in the new object that we created above.
    });
  };
};

export var startGetQuestions = () => { // gets called initially from the app.jsx file when the app loads up.
  return (dispatch, getState) => {
    var questionsRef = firebaseRef.child('questions'); // get reference to correct part of DB

    return questionsRef.once('value').then((snapshot) => { // get the data from the above part of the DB .then is the promise that runs on successfully getting the data from the db
      var questions = snapshot.val() || {}; // set the results from db to the todos var. or if there is no data in db, set it to an empty object
      var parsedQuestions = []; // parsedtodos is the version of the data that will be in the correct format for the app. we initialise it here to an empty array
      console.log('in results');
      Object.keys(questions).forEach((questionId) => { // there is a difference in how we store the data in the app compared to how firebase stores it. This method will return the id for each item in to todos object. we have decided to call this result todoId
        parsedQuestions.push({ // parsedTodos (the empty array created above) will now get one element pushed for each element in the todos object. we need to add the id for each object to within each object in the new array. because firebase stores the ID  outside of the objects themselve so this just allows us to pass the id inside of the object
          id: questionId, // as mentioned above, the id is populated here from the object.keys method. also as i mentioned this runs for each element in original object
          ...questions[questionId] // using ES6 destructoring, we get each other item from the original array. and we use the id in todoit to get this data from the correct elements from the original array. actually it isnt really an array but an object.
        });
      });

      dispatch(getQuestions(parsedQuestions)); // then we run the original addtodos method, passing in the new object that we created above.
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var getQuestions = (questions) => {
  return {
    type: 'GET_QUESTIONS', // gets called from the startAddTodos method below. This then fires the ADD_TODOS reducer
    questions
  };
};



export var addQuestion = (question) => {
  return {
    type: 'ADD_QUESTION',
    question
  };
};

export var startAddQuestion = (text) => {
  return (dispatch, getState) => {
    var question = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var questionRef = firebaseRef.child('questions').push(question);

    return questionRef.then(() => {
      dispatch(addQuestion({
        ...question,
        id: questionRef.key
      }));
    });
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result);
    } , (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then( () => {
      console.log('logged out');
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT',
  };
};
