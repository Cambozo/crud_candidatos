import express from "express";
import {
  Createcandidato,
  buscarCanditado,
  ActualizarCandidato,
  EliminarCandidato
} from "../Controllers/Controles_Candidatos.js.js";

const router = express.Router();

router.post("/", Createcandidato);
router.get("/", buscarCanditado);
router.put("/:id", ActualizarCandidato);
router.delete("/:id", EliminarCandidato);

export default router;
