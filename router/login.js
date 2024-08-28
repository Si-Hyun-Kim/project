// login.js

const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const { USER_COOKIE_KEY } = require('../config/constants');

router.post('/login', (req, res) => {
  const { id, username } = req.body;
  const query = `SELECT id, username FROM users WHERE id=? and username=?`
  const userData = db.query(query, [id, username], (err, results) => {

  if (err) {
      console.log(err);
    }
    
  });

  if (!userData.values) {
    res.status(400).send(`Not Registerd ID: ${id}`);
    return;
  }
  
  const dbId = userData.values[0];
  const dbName = userData.values[1];

  if (username !== dbName) {
    console.log(username, dbId)
    res.status(400).send('Incorrect Username');
    return;
  }
  // 결과에서 순환 참조를 포함하지 않는 객체 생성
  const user = dbName;

  res.cookie(USER_COOKIE_KEY, JSON.stringify(user), { httpOnly: true });
  res.redirect('/');


});

module.exports = router;