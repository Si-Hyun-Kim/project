// express
const express = require('express');
const app = express();

// cookieParser
const cookieParser = require('cookie-parser');
const USER_COOKIE_KEY = 'USER';
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

// DB
const db = require('./lib/db');

// path
const path = require('path');
app.set('port', process.env.PORT || 3000);

// ejs
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// bootstrap
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// post
// app.use(express.urlencoded({extend: true}));

// router
var indexRouter = require('./router/');
var resultRouter = require('./router/result');
var uploadRouter = require('./router/upload');

app.use('/', indexRouter);
app.use('/', resultRouter);
app.use('/', uploadRouter);
app.use(express.static('upload'))

app.listen(app.get('port'), () => {
  console.log('server is running at', app.get('port'));
});

