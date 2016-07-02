function add(a,b) {

  return a+b;
}

console.log(add(3,1));

var arra1 =['Andrew', 25];
var arra2 =['Matt', 32];



function greet(name, age) {
  console.log("Hello "+ name+". You are "+age+" years old. ")
}
greet(...arra1);
greet(...arra2);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name){
console.log("hi" + name);
});
