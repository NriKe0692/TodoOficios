const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
//app.use(require('./routes/index'));
app.use('/api', require('./routes/distritos'));
app.use('/api', require('./routes/clientes'));
app.use('/api', require('./routes/trabajadores'));
app.use('/api', require('./routes/especialidades'));
app.use('/api', require('./routes/proyectos'));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});