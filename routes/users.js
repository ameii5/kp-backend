const express = require('express');
const router = express.Router();
const connection = require('../connect');

// Get Users
router.get('/', (req, res, next) => {

    connection.query('SELECT * FROM users', (err, result, fields) => {
        !err ? res.json(result) : res.json({ err });
    });
});

module.exports = router;