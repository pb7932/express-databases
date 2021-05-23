const express = require('express');
const router = express.Router();
const repo = require('../db/index');
const Student = require('../models/student');

router.get('/', function(req, res,next) {
    res.render('addStudent');
}); 

router.post('/', function(req, res, next) {
    let student = new Student(
        req.body.firstname,
        req.body.lastname,
        req.body.OIB,
        req.body.JMBAG,
        req.body.pbrstan,
    );
    console.log(student.toString());
    res.redirect('/');
});

module.exports = router;