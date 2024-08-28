// check.js

const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const { USER_COOKIE_KEY } = require('../config/constants');

router.get('/', (req, res) => {
  const username = req.cookies[USER_COOKIE_KEY];
  console.log('get', username);
  console.log(req,res);

  if (username) {
    const userData = JSON.parse(username);

    let query = `SELECT id,username FROM users WHERE id=? and username=?`
    db.query(query, [userData.id, userData.username], (err, results) => {
      // console.log(username, userData)
      // console.log(results);
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
        return;
      }

    })

    if (results.length > 0) {
      res.status(200).send(`
        <a href="/logout" class="btn btn-primary">Log Out</a>
        <h1>id: ${userData.id}, username: ${userData.username}
        `);
    } 
    
    else {
      res.status(400);
    }

    return;
  }

  res.status(200);


  // const isLoggedIn = req.session.isLoggedIn || 
})

module.exports = router;