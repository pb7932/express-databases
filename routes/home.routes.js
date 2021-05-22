const express = require('express');
const router = express.Router();
const repo = require('../db/index');

router.get('/', async function( req, res, next ) {
    const predmeti = await (await repo.query('SELECT * FROM predmet')).rows;
    const studenti = await ( await repo.query('SELECT * FROM student LIMIT 200')).rows;
    
    res.render('home', {predmeti: predmeti, studenti: studenti});
});

module.exports = router;