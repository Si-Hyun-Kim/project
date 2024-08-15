const express = require('express');
const router = express.Router();
const db = require('../lib/db.js');

router.post('/signup', (req, res) => {
  const {id, username} = req.body;
  const query = 'SELECT id, username from users where id = ?';
  db.query(query, [id], (err, results) => {

    if (err) {
      delete require.cache[require.resolve('../lib/db.js')];
      return;
    }
    else if (results == false) {
      const insertQuery = 'INSERT INTO users (id, username) VALUES (?, ?)';
      db.query(insertQuery, [id, username], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send('Server Error');
          return;
        }

        const newUser = {id, username};

        res.cookie(USER_COOKIE_KEY, JSON.stringify(newUser));

        res.redirect('/');
      });
    }
    else {
       res.status(400).send(`duplicate id: ${id}`);
      return;
    }
  })
});

 

module.exports = router;
