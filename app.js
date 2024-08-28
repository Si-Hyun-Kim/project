//app.js

// express
const express = require('express');
const app = express();

// cookieParser
const cookieParser = require('cookie-parser');
const { USER_COOKIE_KEY } = require('./config/constants');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// login
app.get('/login', (req, res) => {  
  res.render('login'); // login.ejs 파일을 렌더링
  
});

// signup
app.get('/signup', (req, res) => {
  res.render('signup'); // signup.ejs 파일을 렌더링
});


// router
const indexRouter = require('./router/');
const resultRouter = require('./router/result');
const uploadRouter = require('./router/upload');
const loginRouter = require('./router/login');
const signupRouter = require('./router/signup');
const logoutRouter = require('./router/logout');
const checkRouter = require('./router/check');

app.use('/', indexRouter);
app.use('/', resultRouter);
app.use('/', uploadRouter);
app.use(express.static('upload'))
app.use('/', checkRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);
app.use('/', logoutRouter);


app.listen(app.get('port'), () => {
  console.log('server is running at', app.get('port'));
});

// USER_COOKIE_KEY 변수를 내보내기
module.exports = { app, USER_COOKIE_KEY };