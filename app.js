//! import the package here.
//* build-in packages

//* customised packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = require('./router');

//! constant variables
// const students = [
//   { id: 1, name: 'lex1', gender: 'male', age: 20, hobbies: 'lol1' },
//   { id: 2, name: 'lex2', gender: 'male', age: 20, hobbies: 'lol2' },
//   { id: 3, name: 'lex3', gender: 'male', age: 20, hobbies: 'lol3' },
//   { id: 4, name: 'lex4', gender: 'male', age: 20, hobbies: 'lol4' },
//   { id: 5, name: 'lex5', gender: 'male', age: 20, hobbies: 'lol5' },
//   { id: 6, name: 'lex6', gender: 'male', age: 20, hobbies: 'lol6' },
//   { id: 7, name: 'lex7', gender: 'male', age: 20, hobbies: 'lol7' }
// ];

//! Declare application
var app = express();
//! Setting for the rendering engine
app.engine('html', require('express-art-template'));

//! Setting for the resources loading
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

//! Setting for the middleware
//* setting for the 'body-parser'
//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

//* Override with '_method' header in the request
app.use(methodOverride('_method'));

//! Route table
app.use(router);

app.listen(3000, function() {
  console.log('Running 3000....');
});
