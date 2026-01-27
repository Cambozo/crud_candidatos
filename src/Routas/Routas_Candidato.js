import express from 'express';
 import {Createcandidato,buscarCanditado,ActualizarCandidato,EliminarCandidato} from "../Controllers/Controles_Candidatos.js"
 

 const router=express.Router();
 // vamos criar as nossas rotas
 router.post("/",Createcandidato);
 router.get("/",buscarCanditado);
 router.put("/:id",ActualizarCandidato);
 router.delete("/:id",EliminarCandidato);
 //exportar o arquivo

 export default router;
