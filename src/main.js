// Declaracion de variables
//Propietario
let NumeroDoc = document.getElementById('NumeroDoc');
let Nombre1 = document.getElementById('Nombre1');
let Nombre2 = document.getElementById('Nombre2');
let Apellido1 = document.getElementById('Apellido1')
let Apellido2 = document.getElementById('Apellido2')
let FechaNac = document.getElementById('FechaNac')
let Tel = document.getElementById('Tel')
let Dire = document.getElementById('Dire')
let Email = document.getElementById('Email')
//Mascota
let NumRegis = document.getElementById('NumRegis')
let NombreMasc = document.getElementById('NombreMasc')
let LugarNacMas = document.getElementById('LugarNacMasc')
let FechaNacMas = document.getElementById('FechaNacMas')
let Peso = document.getElementById('Peso')
let Raza = document.getElementById('Raza')
//Esterilizacion
let FechaEsterilizacion = document.getElementById('FechaEsterilizacion')
//Vacunas 
let numDocPer = document.getElementById('numDocPer')//mira
let nitVacu = document.getElementById('nitVacu')
let nomVacu = document.getElementById('nomVacu')
let fechaAplica = document.getElementById('fechaAplica')
//Agendamiento
let nitAgenda = document.getElementById('nitAgenda ');
let NumDocPers = document.getElementById('NumDocPers');
let fechaVisita = document.getElementById('fechaVisita');
let horaVisita = document.getElementById('horaVisita');
//index 
let email_index= document.getElementById('email_index');
let password = document.getElementById('password');
//metodoPago
let codMetPago = document.getElementById('codMetPago')
let descriMetPago = document.getElementById('descriMetPago')
//TipoDoc
let codTipoDoc = document.getElementById('codTipoDoc')
let descrTipoDoc = document.getElementById('descrTipoDoc')
//Botones
const buttonIngre = document.getElementById('buttonIngre')
const buttonModi = document.getElementById('buttonModi')
const buttonElim = document.getElementById('buttonElim')
const buttonDesha = document.getElementById('buttonDesha')
const buttonCance = document.getElementById('buttonCance')
//Conexion a la base de dato
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');

app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql2.createConnection({
    host: 'localhost:3000',
    user: 'root',
    password: '',
    database: 'database_name'
});
//conexion a BD
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to the database!');
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

// login 
app.post('/src/index.html', (req, res) => {
    const email = req.body.Email;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [email, password], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
        console.log('Login successful');
        res.send('Login successful');
    } else {
        console.log('Login failed');
        res.send('Login failed');
    }
        
    });
});

// insertar datos

app.post("/", (req, res) => {
    const numeroDoc = req.body.NumeroDoc;
    const nom1 = req.body.Nombre1;
    const nom2 = req.body.Nombre2;
    const ape1= req.body.Apellido1;
    const ape2= req.body.Apellido2;
    const feNac= req.body.FechaNac;
    const telef= req.body.Tel;
    const direcc= req.body.Dire;
    const email= req.body.Email;

    const sql = "INSERT INTO form_data (NumeroDoc, Nombre1, Nombre2, Apellido1, Apellido2, FechaNac, Tel, Dire, Email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [numeroDoc, nom1,nom2, ape1, ape2, feNac, telef, direcc, email];

    connection.query(sql, values, (error, results) => {
        if (error) throw error;
        res.send("Data saved successfully.");
    });
});

/*function login(){
    let email_index, password 
    
    
    

    if(email_index == )



}*/










//Para finalizar la conexion y termine
conection.end()