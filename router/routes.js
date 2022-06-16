import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("Bienvenu sur l'api du Game Shop NGS");
})

router.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "../view/build/index.html"));
})

export default router;