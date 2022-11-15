const express = require('express');
const app = express();
const ejs = require('ejs');

app.listen(9000, ()=> console.log('Assignment2 server has started...'));

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) =>{
    const myProfile = {
        Name: 'ENYINDA Temple Hanachor',
        Score: '98%',
        State: 'Rivers State',
        Nationality: 'Nigerian'
    }
    res.render('index', {myProfile});
});
