import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { startDb } from "./scr/config/database.js";


//Leyendo variables de entorno nativamente
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3001;



app.listen(PORT, async () => { 
    await startDb();
    console.log("Servidor listo en el puerto " + PORT, `http://localhost:${PORT}`);
 });