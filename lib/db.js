// lib/db.js

var mysql = require('mysql');
var db = mysql.createConnection({
  host : '15.164.245.19',
  user : 'user1',
  password : 'ycdc2024',
  database : 'project',
})
db.connect();

module.exports = db;