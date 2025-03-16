const express = require('express'),
    router = express.Router();

// auth user
router.post('/user', function (req, res) {
    let sql = "SELECT objectid, firstname, lastname FROM users WHERE username=? and password=? ";

    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            //return res.json("Success");
            return res.status(200).json({ message: "Successfull", data });
        }
        else {
            return res.json("Failed");
        }

    })
    //console.log(req.body)
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