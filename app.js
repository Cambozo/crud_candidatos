import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import candidatoRoutes from "./src/routas/routascandidato.js";

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:8080"], // frontend dev e backend dev
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// ROTAS DA API
app.use("/candidatos", candidatoRoutes);

// FRONT (VITE BUILD)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// arquivos estáticos
app.use(express.static(path.join(__dirname, "dist")));

// catch-all correto (SPA)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

export default app;

