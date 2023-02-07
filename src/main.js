const express = require('express');
const ejs = require('ejs');
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
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('/src/index.html', path.join(__dirname, '/src/index.html }'));

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
app.use(express.urlencoded({extend: true}))//desde el modulo de express se necesita el 
//urlencode para poder entender todos los datos provenientes del form
//router
app.use('/', customerRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')))


//levantamos el servidor 
app.listen(3001, ()=>{
    console.log('server on port 3001');
})



