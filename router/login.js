var express = require('express');
var router = express.Router();
const db = require('../lib/db');

router.post('/login', (req, res) => {
  const username = req.cookies[USER_COOKIE_KEY];


  if (user) {
    const userData = JSON.parse(username);

    let query = `SELECT id,username FROM users WHERE id=? and username='?'`
    db.query(query, [userData.id, userData.username], (err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(results)
    })

    if (db.get(userData.id)) {
      res.status(200).send(`
        <a href="/logout">Log Out</a>
        <h1>id: ${userData.id}, username: ${userData.username}
        `);
        return;
    }
  }

  res.status(200).send(`
    <a href="/login" class="btn btn-primary">Log In</a>
    <a href="/signup" class="btn btn-primary">Sign Up</a>
    <h1>Not Logged In</h1>
    `);
})

module.exports = router;