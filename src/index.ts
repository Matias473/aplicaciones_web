import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import { connect } from 'http2';
import mongoose from 'mongoose';
import connectDBMongo from './config/db';

//inicializa el servidor de express
const app = express();
//define el puerto
const PORT = 3000;

app.use(express.json()) //todo lo que recibe es en formato json
app.use(morgan('dev')) //mostrar logs de la peticion

app.use('/api/v1/auth', authRoute) //ruta principal

connectDBMongo().then(() =>{
    console.log("el servidor funciona en el puerto", PORT)
    
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
})