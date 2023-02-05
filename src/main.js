const express = require('express');
const { dirname } = require('path');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');
const app = express();

//importar rutas 
const customerRouter = require('./customer');




//settings 
app.set('port', process.env.PORT || 3001);
//configuracion de las plantillas
app.set('view engine', 'ejs');
app.set('src', path.join(__dirname, 'src'));

//middlewares

app.use(morgan('dev'));

//mirar por que el error
app.use(myConnection(mysql, { 
    
        host: 'localhost', 
        user: 'root',
        password: '', 
        port: 3306, 
        database: 'guarderiacanina'},'single'
    )
);
//preguntar si hay files en BD
app.use(express.urlencoded({extend: false}))//desde el modulo de express se necesita el 
//urlencode para poder entender todos los datos provenientes del form
//router
app.use('/', customerRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')))


//levantamos el servidor 
app.listen(3001, ()=>{
    console.log('server on port 3001');
})



