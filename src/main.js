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
app.set('port', process.env.PORT || 3000);
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
        database: 'guarderiacanina'},'single'));

        
//router
app.use('/', customerRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')))


//levantamos el servidor 
app.listen(3000, ()=>{
    console.log('server on port 3000');
})



