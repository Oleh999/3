const express = require('express');

const expHbs = require('express-handlebars');

const path = require('path');

const app = express();

const users =  [];

const houses = [];

app.use(express.json());

app.use(express.static(path.join(__dirname,'static')));

app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine','.hbs');

app.set('views',path.join(__dirname,'static'));

app.get('/', (req,res) => {
    res.render('register')
});

app.get('/login', (req,res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/createHouse',(req,res)=>{
    res.render('createHouse');
});

app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/houses',(req,res)=>{
    res.json(houses);
});

app.get('/users/:user_id', (req, res) => {
    const userID = users.find( user => +req.params.user_id === user.user_id);
    res.json(userID);
});

app.get('/createHouse/:house_id', (req, res) => {
    const houseID = houses.find( house => +req.params.house_id === house.house_id);
    res.json(houseID);

});

app.post('/register', (req,res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
    res.render('login');
});


app.post('/login', (req,res) => {
    const login = req.body;
    users.forEach( checkLogin  => {
            checkLogin.userName === login.name && checkLogin.userPassword === login.password
            ? res.redirect(`/users/${checkLogin.user_id}`): res.json('Try one more')
    });

});

app.post('/createHouse',(req,res)=>{
    const createHouse=req.body;
    createHouse.house_id = houses.length + 1;
    houses.push(createHouse);
    console.log(createHouse);
    res.redirect('/houses' );
});

app.all('*',(req,res)=>{
    res.json('404 NOT FOUND' );
});

app.listen(3000,()=>{
    console.log('3000');
});