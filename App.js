import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import candidatoRoutes from "./src/routas/routascandidato.js";

const app = express();

// =======================
// MIDDLEWARES
// =======================
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// =======================
// ROTAS DA API (PRIMEIRO)
// =======================
app.use("/candidatos", candidatoRoutes);

// =======================
// FRONTEND (DEPOIS)
// =======================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚠️ só serve o React se a pasta dist existir
app.use(express.static(path.join(__dirname, "dist")));

// Qualquer rota que NÃO seja /candidatos → React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

export default app;

