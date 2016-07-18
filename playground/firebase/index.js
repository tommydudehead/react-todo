import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBn7UZpm1G1m6N34bKJcaRAr0tSu0jJIis",
    authDomain: "matt-todo-app.firebaseapp.com",
    databaseURL: "https://matt-todo-app.firebaseio.com",
    storageBucket: "matt-todo-app.appspot.com",
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();
    firebaseRef.set({
      isRunning: true,
      user: {
        name: 'Matthew',
        age: 32
      },
      app: {
        name: 'Todo app',
        version: 1.0
      }
    });

// new var that stores ref to todos awway
// child added to listen for new todos added and print key value/ /
// add two todos push text property only
//refresh and check callback appears

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

 todosRef.push({ // then add details as desired and they are inserted.
    text: 'play a game'
  });
  todosRef.push({ // then add details as desired and they are inserted.
     text: 'play a game 2'
   });
