import express from "express";
import { persona } from "../controller/personaController.js";

const router = express.Router();

router.post("/create", persona);

export default router;
