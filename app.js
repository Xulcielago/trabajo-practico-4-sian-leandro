import express from "express";

//Leyendo variables de entorno nativamente
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT;



app.listen(PORT, () => { console.log("Servidor listo en el puerto " + PORT, `http://localhost:${PORT}`); });