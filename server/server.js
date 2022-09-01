var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
const e = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist/week4tut'));

var http = require('http').Server(app);
var server = http.listen(3000, function() {
  console.log("Server listening on port 3000");
});

// create a User class
class User {
  username;
  password='';
  email;
  age;
  birthday;
  valid;

  constructor( username, password='', email, age, birthday, valid){
    this.username = username;
    this.password = password;
    this.email = email;
    this.age = age;
    this.birthday = birthday;
    this.valid = valid;
  }
}

// login route
app.post('/api/auth', function(req, res){

  if (!req.body) {
    return res.sendStatus(400)
  }

  var preUser = [
    new User('abc', '123', 'abc@com.au', '1', '1/9/2022'),
    new User('def', '456', 'def@com.au', '2', '2/9/2022'),
    new User('tommy', '789', 'tommy@com.au', '3', '3/9/2022'),
  ]

  var checkLogin = false;
  var user= {};
  user.username = req.body.username;
  user.password = req.body.password;

  for (let i = 0; i <= preUser.length; i++) {
    if (user.username == preUser[i].username && user.password == preUser[i].password) {
      preUser[i].valid = 'yes';
      checkLogin = true;
      user = preUser[i];
      break;
    }
  }

  if (checkLogin == true) {
    user.valid = 'no';
    res.send({ok:true});

  } else {
    res.send({ok:false});
  }
  res.send(user);
});





