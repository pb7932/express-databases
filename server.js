const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

const homeRouter = require('./routes/home.routes');
const addStudRouter = require('./routes/addStud.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, '../public'))),
app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);
app.use('/add', addStudRouter);

app.listen(3000);