var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Your-Password'
});

connection.connect(function(err) {

  console.log('Connected!');
  connection.query('CREATE DATABASE mydb', function (err, result) {
    console.log('Database created');
  });
});