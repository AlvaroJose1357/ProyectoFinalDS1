// Declaracion de variables
//Propietario
let NumeroDoc = document.getElementById('NumeroDoc')
let Nombre1 = document.getElementById('Nombre1')
let Nombre2 = document.getElementById('Nombre2')
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
let nitAgenda = document.getElementById('nitAgenda ')
let NumDocPers = document.getElementById('NumDocPers')
let fechaVisita = document.getElementById('fechaVisita')
let h = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
//Conexion a la base de dato
const mysql = require('mysql')//mira si son simples?

const conection = mysql.createConnection({
    host: 'localhost:3000', 
    user: 'root',
    password: '', 
    databases:'/*falta base datos*/'
})
//verifica conexion 
conection.connect((err) =>{
    if(err) throw err
    console.log("la conexion ha funcionado")
})
//.query
//Apartir de aqui se comienzan el programa











//Para finalizar la conexion y termine//
conection.end()