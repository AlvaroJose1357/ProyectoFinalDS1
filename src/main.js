// Declaracion de variables
//let NumeroDoc = 

//Conexion a la base de datos
const mysql = require("mysql")//mirar si son simples?

const conection = mysql.createConnection({
    host: "localhost:3000", 
    user: "root",
    password: "", 
    databases:"/*falta base datos*/"
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