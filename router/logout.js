const express = require('express');
const router = express.Router();
const { USER_COOKIE_KEY } = require('../config/constants');

router.get('/logout', (req, res) => {
  res.clearCookie(USER_COOKIE_KEY);
  res.redirect('/');
});

module.exports = router