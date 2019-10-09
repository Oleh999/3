const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'static'));

let { user , house ,pages} = require('./controllers');
let { user: userMiddleware ,house: houseMiddleware } = require('./middleware');

app.get('/login', pages.login);
app.get('/register', pages.register);
app.get('/createHouse',pages.createHouse);
app.get('/user',(req,res)=>{
    res.render(user);
});
app.get('/users',user.findAll);
app.get('/users/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById );
app.post('/register', userMiddleware.checkUserValidityMiddleware,user.createUser);
app.post('/login',userMiddleware.checkUserLoginMiddleware,user.loginUser );

app.get('/houses',house.findAllHouse);
app.get('/createHouse/:house_id',houseMiddleware.checkIsHousePresentMiddleware,house.getHouseById);
app.post('/createHouse',houseMiddleware.checkHouseValidityMiddleware,house.createHouse);

app.get('/editUser',pages.editUser);
app.post('/editUser',userMiddleware.checkEditUserValidityMiddleware,user.editUser );

app.get('/editHouse',pages.editHouse);
app.post('/editHouse',houseMiddleware.checkEditHouseValidityMiddleware,house.editHouse );

app.all('*',(req,res)=>{
    res.json('404 NOT FOUND' );
});

app.listen(3000,()=>{
    console.log('3000');
});

