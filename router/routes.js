import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("Bienvenu sur l'api du Game Shop NGS");
})

export default router;