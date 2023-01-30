const mysql = require("mysql")

const conection = mysql.createConnection({
    host: "localhost:3000", 
    user: "root",
    password: "", 
    databases:"/*falta base datos*/"
})

conection.connect((err) =>{
    if(err) throw err
    console.log("la conexion ha funcionado")
})