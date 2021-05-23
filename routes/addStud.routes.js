const express = require('express');
const router = express.Router();
const repo = require('../db/index');
const Student = require('../models/student');
const { body, validationResult} = require('express-validator');

router.get('/', function(req, res,next) {
    res.render('addStudent', {errors: []});
}); 

router.post('/', 
    body('firstname').not().isEmpty().isLength({min: 2}).withMessage('Name must be at least 2 characters!').isAlpha(),
    body('firstname').not().isEmpty().isLength({min: 3}).isAlpha().withMessage('Your last name must only contain letters!'),
    body('JMBAG').not().isEmpty().isNumeric().isLength({min: 10, max: 10}).custom(value => {
        let v = String(value);
        if (!v.startsWith('0036')) throw new Error ('JMBAG must start with 0036');
    }),
    body('OIB').not().isEmpty(),
    function(req, res, next) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.render('addStudent', {errors: errors.array()});
        }
        else {
            let student = new Student(
                req.body.firstname,
                req.body.lastname,
                req.body.OIB,
                req.body.JMBAG,
                req.body.pbrstan,
            );
            console.log(student.toString());
            res.redirect('/');
        }
    });

module.exports = router;