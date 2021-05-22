const express = require('express');
const router = express.Router();
const repo = require('../db/index');

router.get('/', async function( req, res, next ) {
    const predmeti = await (await repo.query('SELECT * FROM predmet')).rows;
    const studenti = await ( await repo.query('SELECT * FROM student LIMIT 200')).rows;
    console.log(studenti);
    res.render('home', {predmeti: predmeti, studenti: studenti, predStud: [], studOcj: []});
});

router.get('/:sp([0-9]{1,4})', async function( req, res, next ) {
    const sp = req.params.sp;
    const predmeti = await (await repo.query('SELECT * FROM predmet')).rows;
    const predStud = await ( await repo.query(`SELECT student.* FROM upisanpredmet 
                                                NATURAL JOIN predmeT
                                                NATURAL JOIN student
                                                WHERE predmet.sifpredmet = $1 LIMIT 200`, [sp])).rows;

    res.render('home', {predmeti: predmeti, predStud: predStud, studOcj: [], sp: sp});
});

router.get('/:sp([0-9]{1,4})/:ss([0-9]{1,11})', async function( req, res, next ) {
    const sp = req.params.sp;
    const ss = `${req.params.ss}`;
    const predmeti = await (await repo.query('SELECT * FROM predmet')).rows;
    const studOcj = await ( await repo.query(`SELECT student.*, ocjena, sifpredmet, nazpredmet 
                                            FROM ispit 
                                            NATURAL JOIN student 
                                            NATURAL JOIN predmet 
                                            WHERE ispit.jmbag = $1`, [ss])).rows;
                                            
    res.render('home', {predmeti: predmeti, predStud: [], studOcj: studOcj, sp: sp});
});

module.exports = router;