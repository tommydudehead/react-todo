import firebase from 'firebase';
try  {
  var config = {
      apiKey: "AIzaSyBn7UZpm1G1m6N34bKJcaRAr0tSu0jJIis",
      authDomain: "matt-todo-app.firebaseapp.com",
      databaseURL: "https://matt-todo-app.firebaseio.com",
      storageBucket: "matt-todo-app.appspot.com",
    };
    firebase.initializeApp(config);

} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
