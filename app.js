import express from "express";
import routerDBZ from "./scr/routes/character.routes.js";
import { startDb } from "./scr/config/database.js";

import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", routerDBZ);

app.listen(PORT, async () => { 
    await startDb();
    console.log("Servidor listo en el puerto " + PORT, `http://localhost:${PORT}`);
 });