import express from "express";
import dotenv from "dotenv";
import router from "./router/routes.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, console.log(`Lancement du server sur le port ${PORT}`));