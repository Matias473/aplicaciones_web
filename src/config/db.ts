import mongoose from "mongoose";

const connectDBMongo = async (): Promise<void> =>{
    const mongoUri = "mongodb://localhost:27017/proyecto";
    //ruta: mongodb://<user>:<pass>@<servidor>:<puerto>
    //ruta en caso de error: mongodb://<user>:<pass>@<servidor>:<puerto>/<db>?authSource=admin
    //ruta local cuando no hay usuario y contraseña: mongodb:localhost:27017/proyecto
    try{
        await mongoose.connect(mongoUri);
        console.log("conexion a mongo");   
    } catch (error) {
        console.log("error conexion a mongo", error);
    }
}

export default connectDBMongo