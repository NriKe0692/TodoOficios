const { Router } = require('express');
const router = Router();

// DB Conection
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'todooficios',
    user: 'root',
    password: 'root',
});

conexion.connect(function (err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

router.get('/', (req, res) => {
    conexion.query(`SELECT * FROM distrito`, function (error, results, fields) {
        if (error)
            throw error;

        res.json(results);
    });
});


module.exports = router;