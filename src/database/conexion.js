// min 8:37

let mysql = require("mysql2");

let conexion = mysql.createConnection({
    host: "127.0.0.1",
    database: "cantarini_db",
    user: "root",
    password: "rootCantarini25"
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Conexion exitosa.");
    }
});

conexion.end();