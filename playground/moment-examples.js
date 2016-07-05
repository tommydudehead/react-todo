var moment = require('moment');

console.log(moment().format());

// jan 1st 1970 12am = 0
// jan 1st 1970 12.01am = 60

var now = moment();
var timestamp = 1467749124;
console.log('current timestamp', now.unix());

var currentMoment = moment.unix(timestamp);
console.log('current moment',currentMoment.format('MMM, D, YY @ h:mm a'));

console.log('current moment',currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
