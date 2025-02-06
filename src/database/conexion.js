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

const usuarios = "SELECT * FROM users"; // usuarios
const choferes = "SELECT * FROM choferes"; // listado de choferes
const tractores = "SELECT * FROM tractores"; // listado de tractores

conexion.query(usuarios, function(error, listadoUsuarios){
    if(error){
        throw error;
    }else{
        console.log(listadoUsuarios);
    }
});

conexion.query(choferes, function(error, listadoChoferes){
    if(error){
        throw error;
    }else{
        console.log(listadoChoferes);
    }
})

conexion.query(tractores, function(error, listadoTractores){
    if(error){
        throw error;
    }else{
        console.log(listadoTractores)
}
})

conexion.end();