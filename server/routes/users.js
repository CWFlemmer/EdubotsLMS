const express = require('express'),
    router = express.Router();

// get user lists
router.get('/list', function (req, res) {
    let sql = `SELECT objectid, firstname, lastname, username FROM users`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data)
    })
});


// create new user
router.post('/new', function (req, res) {
    let sql = `INSERT INTO users(firstname, lastname, username) VALUES (?)`;
    let values = [
        req.body.firstname,
        req.body.lastname,
        req.body.username
    ];
    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "New user added successfully"
        })
    })
});

module.exports = router;