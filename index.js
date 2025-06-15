import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express ();

// CONACTAR A LA BASE DE DATOS
db.authenticate()
    .then(() => {
        console.log('✅ Conexión exitosa a la base de datos.');
    })
    .catch(error => {
        console.log('❌ Error al conectar con la base de datos:', error);
    });

// Difinir puerto
const port = process.env.PORT || 8080;

// Hablitar pug
app.set('view engine', 'pug');

//Se actualiza al año actual
app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualyear= year.getFullYear();
    res.locals.nombresitio= "Agencia de viaje";
    next();
})

//AGREGAR BODY PARSER PARA LEER LOS DATOS DEL FORMULARIO

app.use(express.urlencoded({ extended: true }));

//DEFINIR LA CARPETA PUBLICA
app.use(express.static('public'));

// Agregar Routes
app. use('/', router);

app.listen( port, () => {
    console.log(`el servidor esta funcionado en el puerto ${port}`)
});