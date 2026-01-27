import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import candidatoRoutes from './src/Routas/Routas_Candidato.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/candidatos", candidatoRoutes);

// Caminhos para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React build (Vite)
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware para servir React em qualquer rota que não seja /candidatos
app.use((req, res, next) => {
  if (!req.path.startsWith('/candidatos')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

export default app;
